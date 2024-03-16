import React from "react";

function QuizResult(props) {
  return (
    <div style={{display:"grid"}}>
      <div className="show-score">
        Your Score: {props.score}
        <br />
        Total Score: {props.totalScore}
      </div>
      <button id="next-button" onClick={props.tryAgain}>
        Try Again
      </button>
    </div>
  );
}

export default QuizResult;
