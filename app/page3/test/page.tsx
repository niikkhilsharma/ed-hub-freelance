"use client";
import Page3Wrapper from "@/components/page3-wrapper";

import { useState, useEffect, useCallback } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

// Define types
type Answer = string | null;
type LevelStatus = "not-started" | "current" | "completed";

interface Question {
  id: number;
  text: string;
  options: string[];
}

interface Level {
  id: number;
  questions: Question[];
  status: LevelStatus;
}

export default function ExaminationTest() {
  // User data
  const userName = "Sujith Kumar";

  // Timer state
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds

  // Exam state
  const [currentLevel, setCurrentLevel] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [answers, setAnswers] = useState<
    Record<number, Record<number, Answer>>
  >({
    1: Array(10)
      .fill(null)
      .reduce((acc, _, i) => ({ ...acc, [i + 1]: null }), {}),
    2: Array(10)
      .fill(null)
      .reduce((acc, _, i) => ({ ...acc, [i + 1]: null }), {}),
    3: Array(10)
      .fill(null)
      .reduce((acc, _, i) => ({ ...acc, [i + 1]: null }), {}),
    4: Array(10)
      .fill(null)
      .reduce((acc, _, i) => ({ ...acc, [i + 1]: null }), {}),
    5: Array(10)
      .fill(null)
      .reduce((acc, _, i) => ({ ...acc, [i + 1]: null }), {}),
  });

  // Level status
  const [levels, setLevels] = useState<Level[]>([
    { id: 1, questions: generateQuestions(1), status: "current" },
    { id: 2, questions: generateQuestions(2), status: "not-started" },
    { id: 3, questions: generateQuestions(3), status: "not-started" },
    { id: 4, questions: generateQuestions(4), status: "not-started" },
    { id: 5, questions: generateQuestions(5), status: "not-started" },
  ]);

  // Handle exam submission
  const handleSubmit = useCallback(() => {
    // In a real app, you would send the answers to a server
    console.log("Exam submitted:", answers);
    setIsSubmitted(true);
    setShowModal(true);
    // Stop the timer by clearing the interval (done implicitly by setting isSubmitted)
  }, [answers]);

  // Timer effect
  useEffect(() => {
    if (isSubmitted) return; // Don't start timer if already submitted

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          // Handle exam submission when time is up
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, handleSubmit]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Generate questions for each level
  function generateQuestions(level: number): Question[] {
    // In a real app, these would come from an API or database
    // For this example, we'll use placeholder questions
    return Array(10)
      .fill(null)
      .map((_, i) => ({
        id: i + 1,
        text:
          i === 0
            ? "Which part of the plant makes food?"
            : `Level ${level} Question ${i + 1}`,
        options: ["Root", "Stem", "Leaf", "Flower"],
      }));
  }

  // Handle answer selection
  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentLevel]: {
        ...prev[currentLevel],
        [currentQuestion]: value,
      },
    }));
  };

  // Handle option click - allow clicking anywhere in the option div
  const handleOptionClick = (option: string) => {
    handleAnswerChange(option);
  };

  // Handle level change
  const handleLevelChange = (levelId: number) => {
    setCurrentLevel(levelId);
    setCurrentQuestion(1);
    
    // Update level statuses - current level is "current"
    // Previous levels are "completed", future levels are "not-started"
    setLevels((prev) =>
      prev.map((level) => ({
        ...level,
        status: level.id === levelId 
          ? "current" 
          : level.id < levelId 
            ? "completed" 
            : "not-started"
      }))
    );
  };

  // Handle navigation
  const handleNext = () => {
    if (currentQuestion < 10) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentLevel < 5) {
      // Mark current level as completed
      setLevels((prev) =>
        prev.map((level) => {
          if (level.id === currentLevel) {
            return { ...level, status: "completed" };
          } else if (level.id === currentLevel + 1) {
            return { ...level, status: "current" };
          }
          return level;
        })
      );
      
      // Move to next level
      setCurrentLevel(currentLevel + 1);
      setCurrentQuestion(1);
    } else {
      // Submit exam
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentLevel > 1) {
      // Don't change level completion status when going back
      setCurrentLevel(currentLevel - 1);
      setCurrentQuestion(10);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Get current question data
  const currentQuestionData = levels.find((l) => l.id === currentLevel)
    ?.questions[currentQuestion - 1];

  // Determine button text based on current position
  const getButtonText = () => {
    if (currentQuestion === 10) {
      return currentLevel === 5 ? "Submit" : "Next Level";
    }
    return "Next";
  };

  return (
    <Page3Wrapper>
      <div className="min-h-screen bg-gray-50 p-2">
        <div className="max-w-4xl mx-auto relative">
          <h1 className="text-2xl font-bold mb-2">Welcome, {userName}</h1>

          <Card className="shadow-sm">
            <CardContent className="p-3 md:p-4">
              <div className="text-center mb-2">
                <h2 className="text-base font-medium">
                  Graded Quiz:{" "}
                  <span className="font-normal">
                    DMIT (Dermatoglyphics Multiple Intelligence Test) and skill
                    assessment
                  </span>
                </h2>
              </div>

              {/* Level tabs with connecting lines */}
              <div className="flex justify-center items-center mb-3 relative">
                {levels.map((level, index) => (
                  <div key={level.id} className="flex items-center">
                    <button
                      onClick={() => handleLevelChange(level.id)}
                      disabled={isSubmitted}
                      className={`
                        px-3 py-1 rounded-full text-sm transition-colors
                        ${
                          level.status === "current"
                            ? "border border-pink-500 text-pink-500"
                            : level.status === "completed"
                            ? "bg-pink-500 text-white"
                            : "bg-white border border-gray-200 text-gray-700"
                        }
                      `}
                    >
                      Level {level.id}
                    </button>
                    {index < levels.length - 1 && (
                      <div className="w-6 h-px bg-gray-300 mx-1"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mb-3">
                <div className="text-sm">Questions:20</div>
                <div className="bg-pink-500 text-white rounded-full px-4 py-1 text-center">
                  <div className="text-lg font-semibold">
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-xs">Time Limit:20 Mins</div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-3">
                <div className="mb-1 font-medium">
                  Question{currentQuestion}
                </div>
                <div className="text-lg mb-2">{currentQuestionData?.text}</div>

                <div className="text-right mb-1">{currentQuestion}/10</div>

                <RadioGroup
                  value={answers[currentLevel][currentQuestion] || ""}
                  onValueChange={handleAnswerChange}
                  className="space-y-2"
                  disabled={isSubmitted}
                >
                  {currentQuestionData?.options.map((option) => (
                    <div
                      key={option}
                      className={`border rounded-md p-3 transition-colors cursor-pointer
                        ${
                          answers[currentLevel][currentQuestion] === option
                            ? "border-pink-500" // Only pink border for selected option
                            : "border-gray-200"
                        }
                      `}
                      onClick={() => !isSubmitted && handleOptionClick(option)}
                    >
                      <div className="flex items-center">
                        <RadioGroupItem
                          value={option}
                          id={option}
                          className="text-gray-500" // Changed from pink to remove the pink border on the circle
                        />
                        <Label
                          htmlFor={option}
                          className="ml-2 flex-grow cursor-pointer"
                        >
                          {option}
                        </Label>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between">
                {currentQuestion > 1 || currentLevel > 1 ? (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="px-6"
                    disabled={isSubmitted}
                  >
                    Back
                  </Button>
                ) : (
                  <div></div>
                )}

                <Button
                  onClick={handleNext}
                  className="bg-black text-white hover:bg-black/90 px-6"
                  disabled={isSubmitted}
                >
                  {getButtonText()}
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Submission Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 text-center relative">
                <button 
                  onClick={handleCloseModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
                
                <div className="flex justify-center mb-4">
                  <Image
                    src="/page3/test/submit.png" 
                    alt="Student with completed assignment" 
                    className="w-48 h-48 object-contain"
                    width={192}
                    height={192}
                    priority
                  />
                </div>
                
                <h2 className="text-green-600 text-2xl font-bold mb-2">
                  Assessment successfully submitted
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Test completed! Results sent to your teacher
                </p>
                
                <Button 
                  onClick={handleCloseModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-2 rounded"
                >
                  OK
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Page3Wrapper>
  );
}