import styles from "../components/layout.css";
import React from "react";
import formStyles from "../css/forms.module.css";

const ContactForm = props => {
  return (
    <form className={styles.form}>
      <div className={formStyles.formGroup}>
        <input
          type="text"
          name="name"
          id="name"
          value={props.messageForm.name}
          onChange={props.onChange}
          className={formStyles.formControl}
          required
        />
        <label className={formStyles.formPlaceholder} htmlFor="name">
          Name
        </label>
      </div>
      <div className={formStyles.formGroup}>
        <input
          type="email"
          name="email"
          id="email"
          value={props.messageForm.email}
          onChange={props.onChange}
          className={formStyles.formControl}
          required
        />
        <label className={formStyles.formPlaceholder} htmlFor="email">
          E-mail
        </label>
      </div>
      <div className={formStyles.formGroup}>
        <input
          type="numer"
          name="phone"
          id="phone"
          value={props.messageForm.phone}
          onChange={props.onChange}
          className={formStyles.formControl}
          required
        />
        <label className={formStyles.formPlaceholder} htmlFor="phone">
          Phone
        </label>
      </div>
      <div className={formStyles.formGroup}>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={props.messageForm.message}
          onChange={props.onChange}
          className={formStyles.formControl}
          required
        ></textarea>{" "}
        <label className={formStyles.formPlaceholder} htmlFor="message">
          Message
        </label>
      </div>
      <div className={formStyles.formGroup}>
        <input type="checkbox" name="agree" id="agree" value="I agree." />
        <label className={formStyles.agree} htmlFor="agree">
          I agree policy etc.
        </label>
      </div>
      <input
        type="submit"
        value="Send"
        className={formStyles.formBtn}
        required
      />
    </form>
  );
};

export default ContactForm;
