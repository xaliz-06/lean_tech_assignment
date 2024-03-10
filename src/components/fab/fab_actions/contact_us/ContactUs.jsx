import { useEffect, useState } from "react";

import styles from "./ContactUs.module.css";
import { useSelector } from "react-redux";

const ContactUs = ({ toggleFab }) => {
  const loggedIn = useSelector((state) => state.loggedIn);

  const [formValues, setFormValues] = useState({
    name: "",
    number: "",
    description: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [blurredFields, setBlurredFields] = useState({
    name: false,
    description: false,
    email: loggedIn ? true : false,
  });
  const [submitted, setSubmitted] = useState(false);

  const currLocation = window.location.href;

  const thanks_msg = `Thanks for reaching out to us! We will get back to you as soon as possible`;

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formValues.name || !formValues.name.trim()) {
      errors.name = "Please enter your name.";
      isValid = false;
    }

    if (!formValues.description || !formValues.description.trim()) {
      errors.description = "Please describe your query.";
      isValid = false;
    } else if (formValues.description.length < 30) {
      errors.description =
        "Please enter more than 30 characters and elaborate as best as you can.";
      isValid = false;
    }

    if (!loggedIn) {
      if (!formValues.email || !formValues.email.trim()) {
        errors.email = "Please enter your email.";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
        errors.email = "Please enter a valid email address.";
        isValid = false;
      }
    }

    setErrors(errors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setBlurredFields({
      ...blurredFields,
      [name]: true,
    });
  };

  const isClickable = () => {
    for (const field in blurredFields) {
      if (!blurredFields[field]) {
        return false;
      }
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const submitData = loggedIn
        ? {
            ...formValues,
            currLocation,
            number: "Logged In User",
            email: "Logged In User",
          }
        : { ...formValues, currLocation };

      // Data to be sent to the backend
      console.log(submitData);

      setSubmitted(true);
      toggleFab(thanks_msg);
    } else {
      console.log("Form validation failed.");
    }
  };
  return (
    <div className={styles.report_tab_container}>
      {!submitted && (
        <>
          <h3 className={styles.header_text}>
            Let us know what{" "}
            <span className={styles.special}>your queries</span> are!
          </h3>
          <hr />
          <form className={styles.input_form} onSubmit={handleFormSubmit}>
            <div className={styles.name_box}>
              <label htmlFor="name" className={styles.tab_label}>
                Your Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={styles.name_input}
                value={formValues.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter your Name"
                required
              />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>
            {!loggedIn && (
              <>
                <div className={styles.email_box}>
                  <label htmlFor="email" className={styles.tab_label}>
                    Your Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={styles.email_input}
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="Enter your Email"
                    required
                    onBlur={handleBlur}
                  />
                  {errors.email && (
                    <span className={styles.error}>{errors.email}</span>
                  )}
                </div>
                <div className={styles.number_box}>
                  <label htmlFor="number" className={styles.tab_label}>
                    Your Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="number"
                    id="email"
                    className={styles.number_input}
                    value={formValues.number}
                    onChange={handleInputChange}
                    placeholder="Enter your number"
                  />
                  {errors.number && (
                    <span className={styles.error}>{errors.number}</span>
                  )}
                </div>
              </>
            )}
            <div className={styles.detail_textbox}>
              <label htmlFor="describe" className={styles.tab_label}>
                What would you like to ask?{" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                className={styles.describe_text}
                name="description"
                placeholder="Write here..."
                value={formValues.description}
                onChange={handleInputChange}
                onBlur={handleBlur}
                required
              ></textarea>
              {errors.description && (
                <span className={styles.error}>{errors.description}</span>
              )}
            </div>

            <div className={styles.submit_actions}>
              <button
                className={
                  isClickable()
                    ? styles.submit_btn
                    : `${styles.submit_btn} ${styles.disabled}`
                }
                type="submit"
                disabled={!isClickable()}
              >
                SUBMIT
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactUs;
