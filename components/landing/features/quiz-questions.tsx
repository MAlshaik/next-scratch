import React, { useState } from 'react';

interface Answer {
  text: string;
  isCorrect: boolean;
}

interface QuizQuestionProps {
  question: string;
  answers: Answer[];
}

export function QuizQuestion({ question, answers }: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
  };

  return (
    <div className="mb-3">
      <h5 className="font-medium mb-1 text-sm">{question}</h5>
      <ul className="space-y-1">
        {answers.map((answer, index) => (
          <li key={index}>
            <button
              onClick={() => handleAnswerClick(index)}
              className={`w-full text-left p-1 text-xs rounded ${
                selectedAnswer === index
                  ? answer.isCorrect
                    ? 'bg-green-200 dark:bg-green-600 dark:text-white'
                    : 'bg-red-200 dark:bg-red-600 dark:text-white'
                  : 'dark:bg-[#404045] dark:hover:bg-[#333333] bg-white hover:bg-gray-200'
              }`}
            >
              {answer.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
