import React, { useEffect, useReducer, useState } from "react";

const formReducer = (state, data) => {
  return {
    ...state,
    [data.id]: data.value,
  };
};

const Form = (props) => {
  const [children, setChildren] = useState([]);
  const [formData, setFormData] = useReducer(formReducer, {});
  const [formSubmitting, setFormSubmitting] = useState(false);

  const handleFormSubmit = (e) => {
    // prevent default form submission
    e.preventDefault();

    // Submit form
    let submitPromise = props.onSubmit(formData);

    if (submitPromise && submitPromise !== null) {
      console.log("started promise");
      setFormSubmitting(true);

      submitPromise.then(() => {
        setFormSubmitting(false);
      });
    }
  };

  const isFormSubmitting = () => {
    return formSubmitting;
  };

  // If a child prop changes, or the form is submitting, rerender children
  useEffect(() => {
    // Get all Form children as array
    let children = React.Children.toArray(props.children);

    children = children.map((child) => {
      let childType = child.props.type;

      // Add a isFormSubmitting prop - to keep up to date with submit promises
      let extraProps = {
        isFormSubmitting: isFormSubmitting(),
      };

      // If the child is an input field, add an onChange handler, storing updated value
      // in the Form component
      if (childType == "text" || childType == "textarea") {
        // add prop to input child - for this Form components handleValueChange function
        extraProps.onChange = (val) => {
          setFormData({ id: [child.props.id], value: val });
        };
      }

      // Get a new child element with applied props
      child = React.cloneElement(child, {
        ...child.props,
        ...extraProps,
      });

      return child;
    });

    setChildren(children);
  }, [props.children, formSubmitting]);

  // Set initial empty data for children
  useEffect(() => {
    // Get all Form children as array
    let children = React.Children.toArray(props.children);

    // Run through children
    children = children.map((child) => {
      let childType = child.props.type;

      if (childType == "text" || childType == "textarea") {
        // Set empty value for input
        setFormData({ id: [child.props.id], value: "" });
      }
    });
  }, []);

  return (
    <form
      onSubmit={(e) => {
        handleFormSubmit(e);
      }}
    >
      {children.map((child) => {
        return child;
      })}
    </form>
  );
};

export default Form;
