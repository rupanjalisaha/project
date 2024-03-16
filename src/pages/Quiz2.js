import React, { useState } from "react";
import "./quiz.css";
import Quiz3 from "./Quiz3";
const Quiz2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "Which of the following is a client side storage mechanism in web browser?",
      answerOptions: [
        { answerText: "PHP sessions", isCorrect: false },
        { answerText: "Cookies", isCorrect: false },
        { answerText: "Local storage", isCorrect: true },
        { answerText: "Session Storage", isCorrect: false },
      ],
    },
    {
      questionText: "What does DTD stand for in the context of Dreamweaver?",
      answerOptions: [
        { answerText: "Document transfer definition", isCorrect: false },
        { answerText: "Document type declaration", isCorrect: true },
        { answerText: "Data type designation", isCorrect: false },
        { answerText: "Dreamweaver text document", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is a widely-used server-side scripting language for web development that is often integrated with SQL and MySQL Databases?",
      answerOptions: [
        { answerText: "HTML", isCorrect: false },
        { answerText: "CSS", isCorrect: false },
        { answerText: "PHP", isCorrect: true },
        { answerText: "JavaScript", isCorrect: false },
      ],
    },
    {
      questionText: "What is the primary purpose of the term 'database interaction' in the context of web development?",
      answerOptions: [
        { answerText: "Styling web pages", isCorrect: false },
        { answerText: "Establishing server connections", isCorrect: false },
        { answerText: "Managing user authentication", isCorrect: false },
        { answerText: "Handling data retrieval and manipulation in databases", isCorrect: true },
      ],
    },
    {
      questionText: "When integrating PHP and MySQL, which PHP function is used to establish connection?",
      answerOptions: [
        { answerText: "mysql_query()", isCorrect: false },
        { answerText: "Connect_mysql()", isCorrect: false },
        { answerText: "mysqli_connect()", isCorrect: true },
        { answerText: "db_connect()", isCorrect: false },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
    <div className="quiz-container" style={{margin:"5px", width:"auto", marginBottom:"30px"}}>
        <h1 style={{textDecoration:"Overline"}}>Test your web development skills</h1>
      {showScore ? (
        <div className="score-section" style={{display:"grid", padding:"10px", fontSize:"24px", fontFamily:"times new roman"}}>
          Your score: {score}<br/>Total Score: {questions.length}<br/>Accuracy: {score}/{questions.length}
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                key={answerOption.answerText}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Quiz2;
