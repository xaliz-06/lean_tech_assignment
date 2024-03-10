import { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Feedback.module.css";

const Feedback = ({ toggleFab }) => {
  const loggedIn = useSelector((state) => state.loggedIn);

  const [formValues, setFormValues] = useState({
    description: "",
    email: "",
  });

  const [blurredFields, setBlurredFields] = useState({
    description: false,
    email: loggedIn ? true : false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [anon, setAnon] = useState(null);

  let thanks_msg = `Thanks for your valuable feedback!`;

  const currLocation = window.location.href;

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formValues.description || !formValues.description.trim()) {
      errors.description = "Please describe the Feedback.";
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
            email: anon ? "Anonymous" : "Logged In User",
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
            Let us know your <span className={styles.special}>Feedback </span>
            about us!
          </h3>
          <hr />
          <form className={styles.input_form} onSubmit={handleFormSubmit}>
            <div className={styles.detail_textbox}>
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
            {!loggedIn && (
              <div className={styles.email_box}>
                <label htmlFor="email" className={styles.tab_label}>
                  Enter your email to receive an update{" "}
                  <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={styles.email_input}
                  value={formValues.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Enter your Email"
                />
                {errors.email && (
                  <span className={styles.error}>{errors.email}</span>
                )}
              </div>
            )}
            {loggedIn && (
              <div className={styles.check_section}>
                <input
                  type="checkbox"
                  name="isAnon"
                  id="anon"
                  value={anon}
                  onChange={() => setAnon((prevState) => !prevState)}
                  onBlur={handleBlur}
                />
                <label htmlFor="isAnon" className={styles.tab_label}>
                  Send feedback anonymously
                </label>
              </div>
            )}
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

export default Feedback;
