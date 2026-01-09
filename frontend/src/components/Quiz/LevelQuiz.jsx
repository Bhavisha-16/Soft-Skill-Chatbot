import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { validateLevel } from "../../utils/levelValidator";

export default function LevelQuiz() {
  const { level, setLevel } = useContext(SkillContext);

  const handleQuizResult = (passed) => {
    const updatedLevel = validateLevel(level, passed);
    setLevel(updatedLevel);

    if (!passed && level !== "Beginner") {
      alert("Quiz failed. Redirecting to Beginner level.");
    } else {
      alert("Quiz passed. Continue training.");
    }
  };

  return (
    <div>
      <h3>Level Validation Quiz</h3>

      <button onClick={() => handleQuizResult(true)}>
        Pass Quiz
      </button>

      <button onClick={() => handleQuizResult(false)}>
        Fail Quiz
      </button>
    </div>
  );
}
