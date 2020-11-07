import {
  faChevronRight,
  faSpinnerThird,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styles from "./FormInput.module.css";

const FormInput = (props) => {
  const unique = "form-" + Math.random(1, 9999999);

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (val) => {
    setInputValue(val);
    props.onChange(val);
  };

  return (
    <div
      className={styles.formInputContainer}
      style={props.containerStyle ? props.containerStyle : {}}
    >
      {/* form input label - only display for type 'text' or textarea */}
      {(props.type == "text" || props.type == "textarea") && (
        <label className={styles.formInputLabel} htmlFor={props.id}>
          {props.label}
        </label>
      )}

      {/* text input */}
      {props.type == "text" && (
        <FormInputText
          placeholder={props.placeholder}
          id={props.id}
          className={props.className}
          onChange={onInputChange}
          value={inputValue}
          disabled={props.isFormSubmitting || props.disabled}
        />
      )}

      {/* textarea input */}
      {props.type == "textarea" && (
        <FormInputTextarea
          placeholder={props.placeholder}
          id={props.id}
          className={props.className}
          onChange={onInputChange}
          value={inputValue}
          disabled={props.isFormSubmitting || props.disabled}
        />
      )}

      {/* submit button */}
      {props.type == "submit" && (
        <FormInputSubmit
          label={props.label}
          isLoading={props.isFormSubmitting}
          disabled={props.isFormSubmitting || props.disabled}
        />
      )}

      {/* show any error */}
      {props.error && (
        <div className={styles.formInputError}>{props.error}</div>
      )}
    </div>
  );
};

const FormInputText = (props) => {
  const [inputValue, setInputValue] = useState(props.value ? props.value : "");

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  return (
    <input
      type="text"
      placeholder={props.placeholder}
      id={props.id}
      className={props.className}
      value={inputValue}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      disabled={props.disabled}
    />
  );
};

const FormInputTextarea = (props) => {
  const [inputValue, setInputValue] = useState(props.value ? props.value : "");

  useEffect(() => {
    setInputValue(props.value);
  }, [props.value]);

  return (
    <textarea
      placeholder={props.placeholder}
      id={props.id}
      className={props.className}
      value={inputValue}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
      disabled={props.disabled}
    ></textarea>
  );
};

const FormInputSubmit = (props) => {
  return (
    <button
      type="submit"
      className={styles.formSubmitButton}
      disabled={props.disabled}
    >
      {props.label}{" "}
      {!props.isLoading ? (
        <FontAwesomeIcon icon={faChevronRight} fixedWidth />
      ) : (
        <FontAwesomeIcon icon={faSpinnerThird} spin fixedWidth />
      )}
    </button>
  );
};

export default FormInput;
