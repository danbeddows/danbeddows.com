import {
  faChevronRight,
  faSpinnerThird,
} from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./FormInput.module.css";

const FormInput = (props) => {
  const unique = "form-" + Math.random(1, 9999999);

  return (
    <div
      className={styles.formInputContainer}
      style={props.containerStyle ? props.containerStyle : {}}
    >
      {/* form input label - only display for type 'text' or textarea */}
      {(props.type == "text" || props.type == "textarea") && (
        <label className={styles.formInputLabel} for={props.id}>
          {props.label}
        </label>
      )}

      {/* text input */}
      {props.type == "text" && (
        <FormInputText
          placeholder={props.placeholder}
          id={props.id}
          className={props.className}
        />
      )}

      {/* textarea input */}
      {props.type == "textarea" && (
        <FormInputTextarea
          placeholder={props.placeholder}
          id={props.id}
          className={props.className}
        />
      )}

      {/* submit button */}
      {props.type == "submit" && <FormInputSubmit label={props.label} />}
    </div>
  );
};

const FormInputText = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      id={props.id}
      className={props.className}
    />
  );
};

const FormInputTextarea = (props) => {
  return (
    <textarea
      placeholder={props.placeholder}
      id={props.id}
      className={props.className}
    ></textarea>
  );
};

const FormInputSubmit = (props) => {
  return (
    <button type="submit" class={styles.formSubmitButton}>
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
