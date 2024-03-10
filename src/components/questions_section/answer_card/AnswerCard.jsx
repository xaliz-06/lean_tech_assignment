import { useState } from "react";

import styles from "./AnswerCard.module.css";

import profile_img from "../../../assets/top_profile_img.png";

const AnswerCard = ({ answer }) => {
  const [like, setLike] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = answer.date.toLocaleDateString("en-US", options);

  return (
    <div className={styles.answer_card_container}>
      <div className={styles.answer_details}>
        <div className={styles.answer_post_details}>
          <img
            src={profile_img}
            alt="profile_img"
            className={styles.profile_img}
          />
          <div className={styles.user_details}>
            <h3 className={styles.username}>{answer.username}</h3>
            <p className={styles.date}>{formattedDate}</p>
          </div>
        </div>
        <div className={styles.answer_actions}>
          <i className="fa-solid fa-pen-to-square"></i>
          <span className={styles.answer_action_message}>Edit</span>
        </div>
      </div>
      <div className={styles.answer_body_container}>
        <div
          className={`${styles.answer_body_text} ${
            showFullText ? styles.full_text : styles.truncate_text
          }`}
        >
          {answer.answer_body}
          <div className={`${!showFullText ? styles.fade_overlay : ""}`}></div>
        </div>
        {answer.answer_body.length > 50 && (
          <span
            className={styles.show_more}
            onClick={() => setShowFullText((prevState) => !prevState)}
          >
            {showFullText ? "Show Less" : "Show More"}
          </span>
        )}
      </div>
      <div className={styles.answer_reactions_container}>
        <div className={styles.answer_react}>
          <i
            className={
              like ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up"
            }
            onClick={() => setLike((prevState) => !prevState)}
          ></i>
          Like
        </div>
        <div className={styles.answer_comment_section}>
          <i className="fa-regular fa-comment-dots"></i>
          <input
            type="text"
            name="comment"
            className={styles.comment_box}
            placeholder="Add a comment"
          />
          <button type="button" className={styles.comment_btn}>
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
