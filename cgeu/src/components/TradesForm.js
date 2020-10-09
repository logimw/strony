import React from "react";
import styles from "../components/layout.css";
import formStyles from "../css/forms.module.css";
import tradeInfo from "../constants/tradeInfo";

const TradesForm = props => {
  return (
    <form className={styles.form}>
      <div className={formStyles.formGroup}>
        <input
          type="text"
          name="name"
          id="name"
          value={props.SignInForm.name}
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
          value={props.SignInForm.email}
          onChange={props.onChange}
          className={formStyles.formControl}
          required
        />
        <label className={formStyles.formPlaceholder} htmlFor="email">
          E-Mail adress
        </label>
      </div>
      <div className={formStyles.formGroup}>
        <input
          type="numer"
          name="phone"
          id="phone"
          value={props.SignInForm.phone}
          onChange={props.onChange}
          className={formStyles.formControl}
          required
        />
        <label className={formStyles.formPlaceholder} htmlFor="phone">
          Phone number
        </label>
      </div>
      <select name="trades" id="trades" onBlur={props.onChange}>
        <option value="">Choose trade fairs</option>
        {tradeInfo.map((item, index) => {
          return (
            <option value={item.title || ""} key={index}>
              {item.title}
            </option>
          );
        })}
      </select>
      <div className={formStyles.formGroup}>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={props.SignInForm.message}
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
      <input type="submit" value="Send" className={formStyles.formBtn} />
    </form>
  );
};

export default TradesForm;
