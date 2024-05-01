"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';
// import lottie from 'lottie-web';
 // Make sure to configure this with your Firebase settings

interface Question {
  id: number;
  questionText: string;
  isCompulsory: boolean;
  background: string; // URL or local path to the background image
  avatar: string; // URL or local path to the Lottie animation
}

// Sample questions data
const questions: Question[] = [
  {
    id: 1,
    questionText: 'What is your current level of programming experience?',
    isCompulsory: true,
    background: '/pattern-bg.png', // Replace with your actual image path
    avatar: '/avatar1.png', // Replace with your actual Lottie file
  },
  {
    id: 2,
    questionText: 'Which programming languages are you familiar with?',
    isCompulsory: false,
    background: '/pattern-bg.png', // Replace with your actual image path
    avatar: '/avatar2.png', // Replace with your actual Lottie file
  },

  {
    id: 3,
    questionText: 'What is your current level of programming experience?',
    isCompulsory: true,
    background: '/pattern-bg.png', // Replace with your actual image path
    avatar: '/avatar1.png', // Replace with your actual Lottie file
  },
  {
    id: 4,
    questionText: 'Which programming languages are you familiar with?',
    isCompulsory: false,
    background: '/pattern-bg.png', // Replace with your actual image path
    avatar: '/avatar1.png', // Replace with your actual Lottie file
  },
  // ... Add more questions as needed
];

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  // Function to handle answer change
  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  // Function to navigate to the next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Submit the answers to Firebase
      console.log('Submit answers:', answers);
      // db.collection('answers').add(answers); // Uncomment and configure this line
    }
  };

  // Function to navigate to the previous question
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };


  // Render the current question and avatar
  const currentQuestion = questions[currentQuestionIndex];
 


  return (
    <div
      className="relative quiz-container bg-cover bg-center p-8 flex h-screen w-screen flex-col items-center justify-center"
      style={{ backgroundImage: `url(${currentQuestion.background})` }}
    >
      <div className=" avatar-container w-32 h-32 " />
      <div className="absolute question-card bg-transparent p-4 shadow-lg rounded left-7">
        <p className="text-lg font-semibold mb-2">
          {currentQuestion.questionText}
        </p>
        <input
          type="text"
          value={answers[currentQuestion.id] || ''}
          onChange={(e) =>
            handleAnswerChange(currentQuestion.id, e.target.value)
          }
          className={`input ${
            currentQuestion.isCompulsory ? 'border-b-red-500' : 'border-b-gray-300'
          }  border-b p-2 rounded w-full outline-none bg-transparent`}
          placeholder='question-------'
        />
        {currentQuestion.isCompulsory && (
          <p className="text-red-500 text-sm mt-1">* This question is compulsory</p>
        )}

<div className="navigation-buttons flex justify-between mt-4">
        {currentQuestionIndex > 0 && (
          <button
            onClick={handlePrev}
            className="prev-button bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded"
          >
            Previous
          </button>
        )}
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="next-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        ) : (
          <button
         onClick={handleNext} className="submit-button">
            Submit
          </button>
        )}
      </div>
      
      </div>

    <div className="absolute bottom-1 right-6 rounded-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <Image src={currentQuestion.avatar} alt='avatar' width={230} height={230} className='object-cover'/>
    </div>
    </div>
  );
};

export default Quiz;
