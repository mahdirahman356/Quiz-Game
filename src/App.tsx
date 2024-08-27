import { useState } from "react";
import { QuizData } from "./QuizData";
import { Question } from "./Question";

const App = () => {
  // const testList: string[] = ["Paris", "London", "Rome", "Berlin"]

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>()
  const [score, setScore] = useState<number>(0)

  const handleAnswerClick = (answer?: string ) => {
    setSelectedAnswer(answer)
    if (answer === QuizData.question[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  }

  const handleNextButton = () => {
    setSelectedAnswer(null)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const currentQuestion: Question = QuizData.question[currentQuestionIndex]

  const isQuizFinished  = currentQuestionIndex === QuizData.question.length - 1

  return (
    <div className="hero min-h-screen flex justify-center bg-cover items-center" 
    style={{
      backgroundImage: "url(https://i.ibb.co/CM732fs/lorenzo-herrera-p0j-m-E6m-Go4-unsplash.jpg)",
    }}>
     {isQuizFinished ? 
      <div className="p-9 bg-slate-200 w-[85%] md:w-[50%] mx-auto rounded-xl">
        <p className="text-3xl font-bold text-center mb-3 text-pink-500">Finish Quize</p>
        <p className="text-xl text-center font-semibold">Your score: {score} / {QuizData.question.length}</p>
      </div>

     : <div className="p-9 bg-slate-200 w-[90%] my-5 md:w-[80%] mx-auto rounded-xl">
        <h1 className="text-center text-3xl font-bold mb-5 text-pink-500">{QuizData.title}</h1>
        <h2 className="text-xl font-semibold text-gray-600"><span className="mr-5">{currentQuestion.id}.</span>{currentQuestion.question}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-4 mt-6">
          {currentQuestion.options.map((option, index) =>
            <button onClick={() => handleAnswerClick(option)} className={`text-white btn glass hover:bg-blue-300 ${
              selectedAnswer === option ? 'bg-blue-500' : 'bg-pink-500'}`} key={index}>{option}</button>)}
        </div>
        <div className="flex justify-between mt-5">
          <button className="btn">score:{score}</button>
          {selectedAnswer &&
            <button onClick={handleNextButton} className="btn">Next</button>
          }
        </div>
      </div>}
    </div>
  );
};

export default App;