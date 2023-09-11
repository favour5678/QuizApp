import React, { useState } from "react";
import { quizData } from "../data/data";

const QuizQuestions = () => {
  const [data, setData] = useState(quizData);
  const [currentQuestionIndex, setCurrentQestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, userScore] = useState(0);
  // const [score, setScore] = useState({
  //     score: 0,
  //     correctAnswers: 0,
  //     wrongAnswers: 0
  // })

  // console.log(quizData);

  // const question = setData[currentQuestionIndex]
  const presentQuestion = data[currentQuestionIndex];
  console.log(presentQuestion);

  return (
    <main className="container mx-auto bg-[#F4F3EE] rounded max-w-[50%] mt-10 pb-5 shadow-md shadow-[#8A817C]">
      <div>
        <p className=" ml-2 pt-2">Question {currentQuestionIndex + 1}:</p>
        <h2 className="text-center font-bold text-[19px] mt-3 mb-4">
          {presentQuestion.question}
        </h2>
        <div className="flex flex-col items-center">
          {presentQuestion.options.map((option, index) => (
            <button
              key={index}
              className="mb-7 w-[70%] rounded-sm bg-[#BCB8B1] text-base font-semibold"
            >
              {option}
            </button>
          ))}
        </div>
        <button className="bg-[#BCB8B1] shadow rounded-sm px-7 py-[2px] flex items-center mx-auto mt-5">
          <p className="font-semibold">Next</p>
        </button>
      </div>
    </main>
  );
};

export default QuizQuestions;
