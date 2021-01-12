import { useEffect, useRef, useState } from "react";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const successRef = useRef(null);

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
            // Show message + trigger scroll
            setFormSubmitted(true);
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
        });
    }
  };

  // When form is submitted, and success message is shown
  // scroll down (so the message is actually visible)
  useEffect(() => {
    if (formSubmitted) {
      successRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [formSubmitted]);

  return (
    <div className={styles.page}>
      <h1>Contact</h1>
      <h2 style={{ marginBottom: 30 }}>Say hello</h2>
      <Form onSubmit={submitForm} disabled={formSubmitted}>
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
      {formSubmitted && (
        <div className={styles.success} ref={successRef}>
          <h3>Thanks!</h3>I've received your message and will get back to you
          shortly.
        </div>
      )}
    </div>
  );
}
