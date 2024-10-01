import style from "./Options.module.css";

function Options({ updateFeedback, totalFeedback, resetFeedback }) {
  return (
    <div>
      <button
        className={style.button_options}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={style.button_options}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={style.button_options}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={style.button_options} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
