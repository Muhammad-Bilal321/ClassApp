import React, { useState } from 'react';

export default function AdminPanel() {
  const [quiz, setQuiz] = useState({
    title: "JavaScript Basics Quiz",
    questions: [
      {
        questionText: "What is the result of 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
      },
      {
        questionText: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "variable"],
        correctAnswer: "var",
      },
      {
        questionText: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "High Text Markup Language", "Hyper Transfer Markup Language"],
        correctAnswer: "Hypertext Markup Language",
      },
      {
        questionText: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "--", "#"],
        correctAnswer: "//",
      },
      {
        questionText: "What is the result of '5' + 3 in JavaScript?",
        options: ["53", "8", "5 + 3", "TypeError"],
        correctAnswer: "53",
      },
      {
        questionText: "Which data type is used for whole numbers in JavaScript?",
        options: ["string", "boolean", "number", "array"],
        correctAnswer: "number",
      },
    ],
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center">Admin Panel</h1>
      {quiz.questions.map((question, i) => (
        <div key={i} className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Question {i + 1}:</h5>
            <p className="card-text">{question.questionText}</p>
            <div className="btn-group" role="group">
              {question.options.map((option, j) => (
                <button key={j} className="btn btn-primary mr-2 mx-2">
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
