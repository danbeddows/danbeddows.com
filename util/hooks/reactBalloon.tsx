/**
 * A micro library to 'deflate' a React component into JSON for easy offline storage, and
 * an inverse method 'inflate' to generate a component from JSON
 *
 * Supports React components (much be defined in componentLibrary), HTML elements, props,
 * and children (nested components). Does not save component state
 **
 * Author: Dan Beddows
 */

import Heading from "components/content/Heading";
import Paragraph from "components/content/Paragraph";
import UnorderedList from "components/content/UnorderedList";
import React, { FunctionComponent, ReactElement, ReactNode } from "react";

// The object structure received after using Reacts React.Children.toArray method
interface DeflatedComponent {
  props: {
    children: (string | DeflatedComponent)[];
  };
  type: {
    name: string;
  };
}

/**
 * The custom object structure react-balloon converts to and from JSON
 *
 * params:
 * 	children:
 * 		if string, the innerHTML of the component
 * 		if array, the children of the component as an array of InflatedComponents
 * 	props:
 * 		all component props except the 'children' prop
 * 	type:
 * 		optional value. only set if the component is a HTML element
 * 		example value: "li"
 * 	component:
 * 		optional value. only set if the component is a custom React component
 * 		example value: "MyCustomComponent"
 *
 * 	note: if both 'type' and 'component' is undefined, the component type used
 * 	will be React.Fragment
 */
interface InflatedComponent {
  children: string | InflatedComponent[];
  props: {};
  type?: string;
  component?: string;
}

/**
 * Declare a string-based list to map to component types when inflating
 */
const componentLibrary: { [k: string]: FunctionComponent } = {
  Paragraph: Paragraph,
  UnorderedList: UnorderedList,
  Heading: Heading,
};

const deflateRecursive = (element: DeflatedComponent | string) => {
  // First check whether the element is a string - if so, we're at the end of the node
  // so we can return and exit
  if (typeof element === "string") {
    return element;
  }

  // Get component type, and set a different var based in whether the component
  // is a HTML element or React component
  let component, type;
  if (element.type.name) {
    component = element.type.name;
  } else {
    type = element.type;
  }

  // Get the child/children of element
  const children = element.props.children as DeflatedComponent[] | string;

  // Copy all props other than children
  let props: any = { ...element.props };
  delete props.children;

  // If 'children' is a string, we're at end of the node - return and exit
  if (typeof children === "string") {
    return { type, component, children, props };
  }

  // If 'children' is an array - map through and deflate those too
  const recursiveChildren: any = children.map((child) =>
    deflateRecursive(child)
  );

  return { type, component, children: recursiveChildren, props };
};

const deflate = (e: ReactElement): string => {
  // Turn the element into an array
  const element = React.Children.toArray(e)[0] as DeflatedComponent;

  // Grab the elements data
  const data = deflateRecursive(element);

  // Convert and return JSON
  return JSON.stringify(data);
};

const createReactComponent = (
  props: any,
  children: ReactNode[] | string,
  htmlType?: string,
  componentType?: string
): ReactNode => {
  const createElement = (type: string | FunctionComponent<{}>) =>
    React.createElement(type, props, children);

  if (componentType) {
    // React component - if not found, jump out of if statement - React.Fragment will be returned at the end of this function
    let component = componentLibrary[componentType];

    if (component !== undefined) {
      return createElement(component);
    }
  }

  if (htmlType) {
    // HTML element
    return createElement(htmlType);
  }

  // Neither componentType or htmlType were passed, return a fragment
  return createElement(React.Fragment);
};

const inflateRecursive = (elem: InflatedComponent, key: number = 0) => {
  // First check if the children key is a string or an array - if string, we're at the end
  // of the node and we can exit
  const children = elem.children;

  if (typeof children === "string") {
    return createReactComponent(
      { key, ...elem.props },
      children,
      elem.type,
      elem.component
    );
  }

  // 'children' as an array
  const recursiveChildren: ReactNode[] = children.map(
    (child: InflatedComponent, index: number) => inflateRecursive(child, index)
  );

  return createReactComponent(
    { key, ...elem.props },
    recursiveChildren,
    elem.type,
    elem.component
  );
};

const inflate = (data: string): ReactNode => {
  // Convert JSON to array
  const arr = JSON.parse(data) as InflatedComponent;

  return inflateRecursive(arr);
};

export { deflate, inflate };
