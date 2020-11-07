import { useState } from "react";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [errors, setErrors] = useState({});

  const submitForm = (data) => {
    let submissionErrors = {};

    const emailRegex = new RegExp(/^[^s@]+@([^s@.,]+.)+[^s@.,]{2,}$/);

    // Validate form
    if (data.name == "") {
      submissionErrors.name = "Enter your name";
    }

    if (data.email == "") {
      submissionErrors.email = "Enter your email address";
    } else if (!emailRegex.exec(data.email)) {
      submissionErrors.email = "The email address you entered is invalid";
    }

    if (data.message == "") {
      submissionErrors.message = "Enter the message you want to send";
    }

    setErrors(submissionErrors);

    // Check there are no errors
    if (JSON.stringify(submissionErrors) == "{}") {
      // Return a promise to send the data
      return fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status == "success") {
            console.log("success");
          } else if (response.status == "failed") {
            let errors = response.errors;
            let responseErrors = {};

            errors.forEach((error) => {
              responseErrors = { responseErrors, [error.field]: error.error };
            });

            setErrors(responseErrors);
          }
        })
        .catch((error) => {
          console.log(error);
          alert("An unknown error occurred, please try again later.");
        });
    }
  };

  return (
    <div className={styles.page}>
      <h1>Say hello</h1>
      <Form onSubmit={submitForm}>
        <FormInput
          type="text"
          placeholder="Enter name"
          label="Name"
          containerStyle={{ marginBottom: 30 }}
          id="name"
          className={styles.input}
          error={errors.name}
        />
        <FormInput
          type="text"
          placeholder="Enter email address"
          label="Email Address"
          containerStyle={{ marginBottom: 30 }}
          id="email"
          className={styles.input}
          error={errors.email}
        />
        <FormInput
          type="textarea"
          placeholder="Enter message"
          label="Message"
          containerStyle={{ marginBottom: 30 }}
          id="message"
          className={styles.textarea}
          error={errors.message}
        />
        <FormInput type="submit" label="Send" error={errors.internal} />
      </Form>
    </div>
  );
}
