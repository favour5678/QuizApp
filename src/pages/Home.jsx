import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInputValue } from "../context/InputValueContext";

const QUIZ_IMAGE =
  "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/88/ebc021015445b3be6555240ed48aa8/CTT_course-image_Coursera.png?auto=format%2Ccompress&dpr=1";

const Home = () => {
  const { inputValue, setInputValue } = useInputValue();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)

    localStorage.setItem('inputValue', newValue)
  };

  const validateInput = () => {
    if (inputValue === "") {
      setError("Please Fill in the input field");

      setTimeout(() => {
        setError(false);
      }, 2500);
      return false; 
    }
    return true;
  };

  const handleValidateInput = () => {
    if (validateInput()) {
      navigate("/instructionPage");
    }
  };

  return (
    <main>
      <div className="pt-20 flex flex-col justify-center items-center">
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-header">F.A's Quiz</h2>
        <img
          src={QUIZ_IMAGE}
          alt="quiz-image"
          className="h-48 md:h-56 lg:h-64 rounded-full mt-10"
        />
        <input
          type="text"
          placeholder="input your name"
          className="w-[50%] md:w-[40%] lg:w-[30%] mt-10 outline-none border border-black bg-white rounded-md px-4"
          value={inputValue}
          onChange={handleInputChange}
        />
        <small className="text-[11px] pt-1 text-red-300 md:text-[13px] lg:text-[15px] font-extrabold">{error && error}</small>
        <Link
          onClick={handleValidateInput}
          className="bg-white text-black text-sm md:text-base mt-10 h-8 w-[25%] md:w-[15%] lg:w-[10%] flex justify-center items-center shadow-md shadow-gray-800 rounded font-semibold"
        >
          <button>Start Quiz</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
