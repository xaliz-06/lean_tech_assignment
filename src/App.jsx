import styles from "./App.module.css";
import Navbar from "./components/nav/Navbar";
import QuestionPage from "./components/questions_section/QuestionPage";
import FAB from "./components/fab/FAB";

import contact_us_btn from "./assets/ContactUs.svg";
import give_suggestion_btn from "./assets/Suggestion.svg";
import share_feedback_btn from "./assets/ShareFeedback.svg";
import report_an_issue from "./assets/ReportIssue.svg";

import contact_us_btn_mobile from "./assets/contact_us_mobile.png";
import give_suggestion_btn_mobile from "./assets/suggestion_mobile.png";
import share_feedback_btn_mobile from "./assets/feedback_mobile.png";
import report_an_issue_mobile from "./assets/report_mobile.png";

// The FAB options are configurable page to page

// As in this assignment, we are given the
// design for only a dashboard I am creating a
// SPA.

// If in case of MPA, we can use a router and
// just pass the options required to the FAB for
// each route using a filtered array from the
// list of options (array below)

// Here I have created this page with all the
// provided options in the design

// If required we can fetch these options from
// the backend too, assuming hitting a
// particular endpoint will response with an
// array, I have created an array to store the
// options (which in a backend-application may
// come as a response)

const options = [
  {
    id: 1,
    name: "Contact Us",
    btn: contact_us_btn,
    btn_mobile: contact_us_btn_mobile,
  },
  {
    id: 2,
    name: "Give Suggestion",
    btn: give_suggestion_btn,
    btn_mobile: give_suggestion_btn_mobile,
  },
  {
    id: 3,
    name: "Share Feedback",
    btn: share_feedback_btn,
    btn_mobile: share_feedback_btn_mobile,
  },
  {
    id: 4,
    name: "Report an Issue",
    btn: report_an_issue,
    btn_mobile: report_an_issue_mobile,
  },
];

function App() {
  return (
    <div className={styles.root_page}>
      <Navbar />
      <div className={styles.root_page_content}>
        <div className={styles.back_container}>
          <i className="fa-solid fa-arrow-left"></i>
          <a href="#" className={styles.back_link}>
            Back to Questions
          </a>
        </div>
        <div className={styles.main_content}>
          <QuestionPage />
        </div>
      </div>
      <div className={styles.fab_section}>
        <FAB options={options} />
      </div>
    </div>
  );
}

export default App;
