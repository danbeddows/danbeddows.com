import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Form from "src/components/content/Form/Form";
import FormInput from "src/components/content/Form/FormInput";
import PageTitle from "src/components/content/PageTitle";
import Section from "src/components/content/Section";
import Title from "src/components/content/Title";
import { Page } from "src/components/Page";
import { PageLayout } from "src/layouts/PageLayout";

const StyledInput = styled(FormInput)`
  width: 100%;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    width: 300px;
  }
`;

const StyledTextarea = styled(FormInput)`
  width: 100%;
  height: 250px;

  @media (min-width: ${(props) => props.theme.bp.desktop}) {
    width: 550px;
    height: 300px;
  }
`;

const SuccessContainer = styled.div`
  margin-top: 30px;
`;

const SuccessTitle = styled.div`
  font-size: 1.3rem;
  margin: 1rem 0 0.5rem;
  font-weight: 600;
`;

const SuccessBody = styled.div`
  font-size: 1rem;
`;

interface subErrors {
  name?: string;
  email?: string;
  message?: string;
  internal?: string;
}

interface submissionData {
  name: string;
  email: string;
  message: string;
}

interface responseError {
  field: string;
  error: string;
}

const ContactPage = () => {
  const [errors, setErrors] = useState<subErrors>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const successRef = useRef<null | HTMLDivElement>(null);

  const submitForm = (data: submissionData) => {
    let submissionErrors: subErrors = {};

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
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status == "success") {
            // Show message + trigger scroll
            setFormSubmitted(true);
          } else if (response.status == "failed") {
            let errors = response.errors;
            let responseErrors = {};

            errors.forEach((error: responseError) => {
              responseErrors = { responseErrors, [error.field]: error.error };
            });

            setErrors(responseErrors);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return Promise.resolve();
  };

  // When form is submitted, and success message is shown
  // scroll down (so the message is actually visible)
  useEffect(() => {
    if (formSubmitted) {
      successRef.current!.scrollIntoView({ behavior: "smooth" });
    }
  }, [formSubmitted]);

  return (
    <>
      <PageTitle>Contact</PageTitle>

      <Section>
        <Title>Say hello 👋🏻</Title>

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
          <FormInput
            id="submit"
            type="submit"
            label="Send"
            error={errors.internal}
          />
        </Form>

        {formSubmitted && (
          <SuccessContainer ref={successRef}>
            <SuccessTitle>Thanks!</SuccessTitle>
            <SuccessBody>
              I've received your message and I'll get back to you shortly.
            </SuccessBody>
          </SuccessContainer>
        )}
      </Section>
    </>
  );
};

ContactPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default ContactPage;
