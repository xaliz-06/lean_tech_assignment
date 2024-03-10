import { useState } from "react";

import styles from "./QuestionPage.module.css";

import QuestionCard from "./question_card/QuestionCard";
import AnswerCard from "./answer_card/AnswerCard";

// WE CAN FETCH THE QUESTIONS
const question_details = {
  id: 1,
  tags: ["Design", "Technology"],
  question_title:
    "A travel startup wants Amazon to pre-install their personal travel agent bot on existing Amazon Echos. What is the value of the partnership to the travel startup? ",
  question_body:
    "Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus se? ",
  views: 100,
};

// WE CAN FETCH THE ANSWERS FOR A SPECIFIC QUESTION HERE
const answers = [
  {
    question_id: 1,
    answer_id: 1,
    username: "Boibhav Chakraborty",
    date: new Date(2024, 2, 5, 9, 23, 55),
    answer_body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    category: ["popular"],
  },
  {
    question_id: 1,
    answer_id: 2,
    username: "Max Payne",
    date: new Date(2024, 1, 17, 8, 24, 55),
    answer_body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    category: ["top rated", "popular"],
  },
];

const QuestionPage = () => {
  const [category, setCategory] = useState("all");
  const filteredAnswers =
    category === "all"
      ? answers
      : answers.filter((answer) => answer.category.includes(category));

  const displayed_answers = filteredAnswers.map((answer) => {
    return <AnswerCard key={answer.id} answer={answer} />;
  });

  return (
    <div className={styles.questions_page_container}>
      <div className={styles.question_container}>
        <QuestionCard question={question_details} />
      </div>
      <div className={styles.answers_section}>
        <div className={styles.answers_actions}>
          <h3 className={styles.answers_headers}>Answers ({answers.length})</h3>
          <div className={styles.answers_category_section}>
            <span className={styles.sort_by}>Sort By: </span>
            <select
              className={styles.category_options}
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all" selected>
                All
              </option>
              <option value="popular">Popular</option>
              <option value="top rated">Top Rated</option>
            </select>
          </div>
        </div>
        <div className={styles.answers_container}>{displayed_answers}</div>
      </div>
    </div>
  );
};

export default QuestionPage;
