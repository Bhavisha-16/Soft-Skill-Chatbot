import { useState } from "react";

export default function useQuiz() {
  const [attempts, setAttempts] = useState(0);
  const [passed, setPassed] = useState(false);

  const submitQuiz = (isPassed) => {
    setAttempts((prev) => prev + 1);
    setPassed(isPassed);
    return isPassed;
  };

  return {
    attempts,
    passed,
    submitQuiz,
  };
}