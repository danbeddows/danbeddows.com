import React, {
  FormEvent,
  ReactNode,
  Reducer,
  useEffect,
  useReducer,
  useState,
} from "react";

const formReducer: Reducer<any, any> = (state, data) => {
  return {
    ...state,
    [data.id]: data.value,
  };
};

interface FormProps {
  disabled: boolean;
  onSubmit: (payload: any) => Promise<void>;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, disabled }) => {
  const [childrenObjs, setChildrenObjs] = useState<ReactNode[]>([]);
  const [formData, setFormData] = useReducer(formReducer, {});
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleFormSubmit = (e: FormEvent) => {
    // prevent default form submission
    e.preventDefault();

    // Submit form
    let submitPromise = onSubmit(formData);

    if (submitPromise && submitPromise !== null) {
      setIsFormSubmitting(true);

      submitPromise.then(() => {
        setIsFormSubmitting(false);
      });
    }
  };

  const isFormDisabled = () => {
    return disabled;
  };

  // If a child prop changes, or the form is submitting, rerender children
  useEffect(() => {
    // Get all Form children as array
    let childrenArray = React.Children.toArray(children) as ReactNode[];

    childrenArray = childrenArray.map((child: any) => {
      let childType = child.props.type;

      // Add a isFormSubmitting prop - to keep up to date with submit promises
      interface extraPropsInterface {
        isFormSubmitting: boolean;
        disabled: boolean;
        onChange?: (value: any) => void;
      }

      let extraProps: extraPropsInterface = {
        isFormSubmitting,
        disabled: isFormDisabled(),
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

    setChildrenObjs(childrenArray);
  }, [children, isFormSubmitting]);

  // Set initial empty data for children
  useEffect(() => {
    // Get all Form children as array
    let childrenArray = React.Children.toArray(children);

    // Run through children
    childrenArray.map((child: any) => {
      let childType = child.type;

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
      {childrenObjs}
    </form>
  );
};

export default Form;
