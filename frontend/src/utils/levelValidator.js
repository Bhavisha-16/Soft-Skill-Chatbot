export function validateLevel(selectedLevel, quizPassed) {
  if (selectedLevel !== "Beginner" && !quizPassed) {
    return "Beginner";
  }
  return selectedLevel;
}