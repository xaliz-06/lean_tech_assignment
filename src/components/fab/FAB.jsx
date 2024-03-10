import { useEffect, useState } from "react";

import styles from "./FAB.module.css";

import fab from "../../assets/fab.png";
import close_btn from "../../assets/close_btn.svg";
import Report from "./fab_actions/report_an_issue/Report";
import Feedback from "./fab_actions/feedback/Feedback";
import Suggestions from "./fab_actions/suggestions/Suggestions";
import ContactUs from "./fab_actions/contact_us/ContactUs";

import fab_mobile from "../../assets/Fab - M.png";
import close_btn_mobile from "../../assets/mobile_fab_close.png";

const FAB = ({ options }) => {
  const [fabOpen, setFabOpen] = useState(false);
  const [currOption, setCurrOption] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [thanksMsg, setThanksMsg] = useState("");

  const toggleFAB = () => {
    setFabOpen((prevState) => !prevState);
    setCurrOption(null);
  };

  const submitHandler = (msg = null) => {
    toggleFAB();

    if (msg) {
      setThanksMsg(msg);
      setShowMessage(true);
    }
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  // Mapping each option to a component
  const optionComponents = {
    4: <Report toggleFab={submitHandler} />,
    3: <Feedback toggleFab={submitHandler} />,
    2: <Suggestions toggleFab={submitHandler} />,
    1: <ContactUs toggleFab={submitHandler} />,
    null: null,
  };

  return (
    <>
      <div className={styles.fab_container}>
        {!currOption && (
          <ul
            className={
              fabOpen
                ? `${styles.options_container} ${styles.show_options}`
                : styles.options_container
            }
          >
            {options.map((option) => (
              <li key={option.id} className={styles.option}>
                <div className={styles.option_text_container}>
                  <p className={styles.option_name}>{option.name}</p>
                </div>
                <img
                  src={option.btn}
                  alt={option.name}
                  className={styles.option_img}
                  onClick={() => {
                    setCurrOption(option.id);
                  }}
                />
                <img
                  src={option.btn_mobile}
                  alt={option.name}
                  className={styles.option_img_mobile}
                  onClick={() => {
                    setCurrOption(option.id);
                  }}
                />
              </li>
            ))}
          </ul>
        )}
        {currOption && (
          <ul
            className={
              fabOpen
                ? `${styles.options_selected_container} ${styles.show_selected_options}`
                : styles.options_selected_container
            }
          >
            {options.map((option) => (
              <li key={option.id}>
                <img
                  src={option.btn}
                  alt={option.name}
                  className={`${
                    currOption === option.id
                      ? styles.selected_img
                      : styles.option_img
                  }`}
                  onClick={() => {
                    setCurrOption(option.id);
                  }}
                />
              </li>
            ))}
          </ul>
        )}
        {currOption && (
          <div className={styles.option_tab}>
            {optionComponents[currOption]}
          </div>
        )}
        <div className={styles.message_box}>
          {showMessage && (
            <div className={styles.thanks_msg_container}>
              <p className={styles.thanks_msg}>{thanksMsg}</p>
            </div>
          )}
          <img
            src={fabOpen ? close_btn : fab}
            alt="fab_btn"
            className={styles.fab_btn}
            onClick={toggleFAB}
          />
          <img
            src={fabOpen ? close_btn_mobile : fab_mobile}
            alt="fab_btn"
            className={styles.fab_btn_mobile}
            onClick={toggleFAB}
          />
        </div>
      </div>
      {currOption && (
        <div className={styles.mobile_options}>
          <div className={styles.mobile_options_container}>
            <ul
              className={
                fabOpen
                  ? `${styles.options_selected_container_mobile} ${styles.show_selected_options_mobile}`
                  : styles.options_selected_container_mobile
              }
            >
              {options.map((option) => (
                <li key={option.id}>
                  <img
                    src={option.btn}
                    alt={option.name}
                    className={`${
                      currOption === option.id
                        ? styles.selected_img_mobile
                        : styles.option_img_mobile
                    }`}
                    onClick={() => {
                      setCurrOption(option.id);
                    }}
                  />
                </li>
              ))}
            </ul>
            <img
              src={fabOpen ? close_btn_mobile : fab_mobile}
              alt="fab_btn"
              className={styles.fab_btn_mobile}
              onClick={toggleFAB}
            />
          </div>
          <div className={styles.option_tab_mobile}>
            {optionComponents[currOption]}
          </div>
        </div>
      )}
    </>
  );
};

export default FAB;
