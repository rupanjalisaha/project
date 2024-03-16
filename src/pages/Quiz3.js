import React, { useState } from "react";
import "./quiz.css";
import Quiz3 from "./Quiz3";
const Quiz2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "Which of the following is not a type of queue?",
      answerOptions: [
        { answerText: "Single ended queue", isCorrect: true},
        { answerText: "Double ended queue", isCorrect: false },
        { answerText: "Circular queue", isCorrect: false },
        { answerText: "Priority queue", isCorrect: false },
      ],
    },
    {
      questionText: " A graph in which all vertices have equal degree is known as?",
      answerOptions: [
        { answerText: "Complete graph", isCorrect: true },
        { answerText: "Regular graph", isCorrect: false },
        { answerText: "Multi graph", isCorrect: false },
        { answerText: "Simple graph", isCorrect: false },
      ],
    },
    {
      questionText: "A vertex of in-degree zero in a directed graph is called a/an?",
      answerOptions: [
        { answerText: "Root vertex", isCorrect: false },
        { answerText: "Isolated vertex", isCorrect: false },
        { answerText: "Sink", isCorrect: true },
        { answerText: "Articulation point", isCorrect: false },
      ],
    },
    {
      questionText: " A graph is a tree if and only if graph is ?",
      answerOptions: [
        { answerText: "Directed graph", isCorrect: false },
        { answerText: "Contains no cycle", isCorrect: true },
        { answerText: "Planar", isCorrect: false },
        { answerText: "Completely connected", isCorrect: false },
      ],
    },
    {
      questionText: "The elements of a linked list are stored?",
      answerOptions: [
        { answerText: "In a structure", isCorrect: false },
        { answerText: "In an array", isCorrect: false },
        { answerText: "Anywhere the computer has space for them", isCorrect: true },
        { answerText: "In contiguous memory locations", isCorrect: false },
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
        <h1 style={{textDecoration:"Overline"}}>Test your data structures knowledge</h1>
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
