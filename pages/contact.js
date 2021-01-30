import Form from "components/content/Form";
import FormInput from "components/content/Form/FormInput";
import PageTitle from "components/content/PageTitle";
import Section from "components/content/Section";
import Title from "components/content/Title";
import Page from "components/layout/Page";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledInput = styled(FormInput)`
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 769px) {
    width: 300px;
  }
`;

const StyledTextarea = styled(FormInput)`
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 250px;
  }

  @media screen and (min-width: 769px) {
    width: 550px;
    height: 300px;
  }
`;

const SuccessContainer = styled.div`
  margin-top: 30px;
`;

const SuccessTitle = styled.div`
  font-size: 1.17rem;
  margin: 1rem 0 0.5rem;
  font-weight: 600;
`;

const SuccessBody = styled.div`
  font-size: 1rem;
`;

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
    <Page>
      <PageTitle>Contact</PageTitle>

      <Section>
        <Title>Say hello</Title>

        <Form onSubmit={submitForm} disabled={formSubmitted}>
          <StyledInput
            type="text"
            placeholder="Enter name"
            label="Name"
            containerStyle={{ marginBottom: 30 }}
            id="name"
            error={errors.name}
          />
          <StyledInput
            type="text"
            placeholder="Enter email address"
            label="Email Address"
            containerStyle={{ marginBottom: 30 }}
            id="email"
            error={errors.email}
          />
          <StyledTextarea
            type="textarea"
            placeholder="Enter message"
            label="Message"
            containerStyle={{ marginBottom: 30 }}
            id="message"
            error={errors.message}
          />
          <FormInput type="submit" label="Send" error={errors.internal} />
        </Form>

        {formSubmitted && (
          <SuccessContainer ref={successRef}>
            <SuccessTitle>Thanks!</SuccessTitle>
            <SuccessBody>
              I've received your message and will get back to you shortly.
            </SuccessBody>
          </SuccessContainer>
        )}
      </Section>
    </Page>
  );
}
