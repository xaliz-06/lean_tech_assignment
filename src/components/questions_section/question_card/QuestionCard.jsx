import styles from "./QuestionCard.module.css";

const QuestionCard = ({ question }) => {
  const tags_list = question.tags.map((tag) => {
    return (
      <div key={tag} className={styles.question_tag}>
        <h3 className={styles.tag_text}>{tag}</h3>
      </div>
    );
  });

  return (
    <div className={styles.question_card_container}>
      <div className={styles.question_details}>
        <div className={styles.question_tags}>{tags_list}</div>
        <div className={styles.question_badges}>
          <h3 className={styles.question_badge}>Startup</h3>
        </div>
      </div>
      <div className={styles.question_content}>
        <div className={styles.question_title_container}>
          <p className={styles.question_title_text}>
            {question.question_title}
          </p>
        </div>
        <div className={styles.question_body_container}>
          <p className={styles.question_body_text}>{question.question_body}</p>
        </div>
      </div>
      <div className={styles.question_insights}>
        <div className={styles.views_container}>
          <i className="fa-solid fa-eye"></i>
          <p className={styles.views_text}>{question.views} views</p>
        </div>
        <div className={styles.answer_instructions}>
          <i className="fa-solid fa-circle-info"></i>
          <p className={styles.instruction_text}>
            How should you word your answer?
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
