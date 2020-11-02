import Form from "../components/Form";
import FormInput from "../components/FormInput";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const submitForm = () => {};

  return (
    <div class={styles.page}>
      <h1>Say hello</h1>
      <Form onSubmit={submitForm}>
        <FormInput
          type="text"
          placeholder="Name"
          label="Your Name"
          containerStyle={{ marginBottom: 30 }}
          id="name"
          className={styles.input}
        />
        <FormInput
          type="text"
          placeholder="Email"
          label="Your Email Address"
          containerStyle={{ marginBottom: 30 }}
          id="email"
          className={styles.input}
        />
        <FormInput
          type="textarea"
          placeholder="Message"
          label="Your Message"
          containerStyle={{ marginBottom: 30 }}
          id="message"
          className={styles.textarea}
        />
        <FormInput type="submit" label="Send" />
      </Form>
    </div>
  );
}
