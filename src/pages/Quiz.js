import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Calculator from "./Calculator";
import "./quiz.css";
import Quiz2 from "./Quiz2";
import Navbar from "../components/Navbar";
import Quiz3 from "./Quiz3";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "What does the Acronym REST stand for?",
      answerOptions: [
        { answerText: "Representational State Transform", isCorrect: false },
        { answerText: "Representational State Transfer", isCorrect: true },
        { answerText: "Represent State Transform", isCorrect: false },
        { answerText: "Represent State Transfer", isCorrect: false },
      ],
    },
    {
      questionText: "What is the protocol used in REST?",
      answerOptions: [
        { answerText: "FTP", isCorrect: false },
        { answerText: "HTTP", isCorrect: true },
        { answerText: "JMX", isCorrect: false },
        { answerText: "SOAP", isCorrect: false },
      ],
    },
    {
      questionText: "What is the HTTP code related to Internal Server Error?",
      answerOptions: [
        { answerText: "500", isCorrect: true },
        { answerText: "501", isCorrect: false },
        { answerText: "504", isCorrect: false },
        { answerText: "502", isCorrect: false },
      ],
    },
    {
      questionText: "What is the HTTP Code 200 indicate?",
      answerOptions: [
        { answerText: "Error", isCorrect: false },
        { answerText: "Completed", isCorrect: false },
        { answerText: "Success", isCorrect: true },
        { answerText: "warning", isCorrect: false },
      ],
    },
    {
      questionText: "What is the HTTP status code 201 indicate?",
      answerOptions: [
        { answerText: "OK", isCorrect: false },
        { answerText: "Created", isCorrect: true },
        { answerText: "Accepted", isCorrect: false },
        { answerText: "No Content", isCorrect: false },
      ],
    },
    {
      questionText: "What is the protocol used in REST?",
      answerOptions: [
        { answerText: "FTP", isCorrect: false },
        { answerText: "HTTP", isCorrect: true },
        { answerText: "JMX", isCorrect: false },
        { answerText: "SOAP", isCorrect: false },
      ],
    },
    {
      questionText: "Which is not REST Architectural Constraints?",
      answerOptions: [
        { answerText: "Client-Server", isCorrect: false },
        { answerText: "Stateless", isCorrect: false },
        { answerText: "Cacheable", isCorrect: false },
        { answerText: "Service Orchestration", isCorrect: true },
      ],
    },
    {
      questionText: "What is the protocol used in REST?",
      answerOptions: [
        { answerText: "FTP", isCorrect: false },
        { answerText: "HTTP", isCorrect: true },
        { answerText: "JMX", isCorrect: false },
        { answerText: "SOAP", isCorrect: false },
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
        <Navbar></Navbar>
        <Sidebar/>
        <h1 style={{textDecoration:"Overline"}}>Attempt Your Quiz Now</h1>
    <div className="quiz-container" style={{margin:"5px", width:"auto", marginBottom:"30px"}}>
    <h1 style={{textDecoration:"Overline"}}>Test your API testing skills</h1>
      {showScore ? (
        <div className="score-section" style={{display:"grid", padding:"10px", fontSize:"24px", fontFamily:"times new roman"}}>
          Your score: {score}<br/>Total Score: {questions.length}<br/>Accuracy: {score}/{questions.length}<br/>
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
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    <Quiz2/>
    <Quiz3/>
    <Calculator/>
    </div>
  );
};

export default Quiz;
