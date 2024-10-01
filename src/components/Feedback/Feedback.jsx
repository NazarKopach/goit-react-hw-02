import style from "./Feedback.module.css";

function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <ul className={style.list}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Total: {positiveFeedback + "%"}</li>
    </ul>
  );
}

export default Feedback;
