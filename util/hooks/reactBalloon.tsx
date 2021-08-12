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

interface DeflatedComponent {
  props: {
    children: (string | DeflatedComponent)[];
  };
  type: {
    name: string;
  };
}

interface InflatedComponent {
  children: string | InflatedComponent[];
  props: {};
  type?: string;
  component?: string;
}

/**
 * declare a string-based list to map to component types when inflating
 */
const componentLibrary = {
  Paragraph: Paragraph,
  UnorderedList: UnorderedList,
  Heading: Heading,
};

const deflateRecursive = (element: DeflatedComponent | string) => {
  // first check whether the element is a string - if so, we're at the end of the node
  // so we can return and exit
  if (typeof element === "string") {
    return element;
  }

  // get component type, and set a different var based in whether the component
  // is a HTML element or React component
  let component, type;
  if (element.type.name) {
    component = element.type.name;
  } else {
    type = element.type;
  }

  // get the child/children of element
  const children = element.props.children as DeflatedComponent[] | string;

  // copy all props other than children
  let props: any = { ...element.props };
  delete props.children;

  // if 'children' is a string, we're at end of the node - return and exit
  if (typeof children === "string") {
    return { type, component, children, props };
  }

  // if 'children' is an array - map through and deflate those too
  const recursiveChildren: any = children.map((child) =>
    deflateRecursive(child)
  );

  return { type, component, children: recursiveChildren, props };
};

const deflate = (e: ReactElement): string => {
  // turn the element into an array
  const element = React.Children.toArray(e)[0] as DeflatedComponent;
  console.log(element);
  // grab the elements data
  const data = deflateRecursive(element);

  // convert and return JSON
  return JSON.stringify(data);
};

const createReactComponent = (
  props: any,
  children: ReactNode[] | string,
  htmlType?: string,
  componentType?: string
): ReactNode => {
  if (componentType) {
    // react component
    let component = componentLibrary[componentType];
    return React.createElement(component, props, children);
  }
  if (htmlType) {
    return React.createElement(htmlType, props, children);
  }

  // neither componentType or htmlType were passed, return a fragment
  return React.createElement(React.Fragment, props, children);
};

const inflateRecursive = (elem: InflatedComponent, key: number = 0) => {
  // first check if the children key is a string or an array - if string, we're at the end
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
    elem.props,
    recursiveChildren,
    elem.type,
    elem.component
  );
};

const inflate = (data: string): ReactNode => {
  // convert JSON to array
  const arr = JSON.parse(data) as InflatedComponent;

  return inflateRecursive(arr);
};

export { deflate, inflate };