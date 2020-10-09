import React, { useState } from "react";
import Title from "../Title";
import styles from "../../css/contact.module.css";
import ContactForm from "../ContactForm";
import ContactCard from "../Contact/ContactCard";

const Form = () => {
  const [messageForm, setMessageForm] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange({ target }) {
    const updatedForm = { ...messageForm, [target.name]: target.value };
    setMessageForm(updatedForm);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }
  return (
    <section className={styles.contact}>
      <div className={styles.contactCenter}>
        <div className={styles.contactContainer}>
          <div className={styles.contactElement}>
            <Title title="Contact us" inForm={true} />
            <ContactCard />
          </div>
          <div className={styles.contactElement}>
            <div className={styles.text}>
              <p className={styles.subtitle}>
                Send us an email using the form below and make an appointment at
                selected fairs
              </p>
            </div>
            <div>
              <ContactForm messageForm={messageForm} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
