async function validateQuiz() {
  const score = prompt("Enter quiz score (test value):");

  const res = await fetch("http://127.0.0.1:8000/quiz/validate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      level: selectedLevel,
      score: parseInt(score)
    })
  });

  const data = await res.json();

  if (!data.passed) {
    alert("Quiz failed. Redirected to lower level.");
    // Optionally reset allowed levels
    // selectedLevel = selectedLevel === "Expert" ? "Intermediate" : "Beginner";
  } else {
    alert("Quiz passed. Continue training.");
    // Mark this level as passed
    const passedLevels = JSON.parse(localStorage.getItem("passedLevels") || "[]");
    if (!passedLevels.includes(selectedLevel)) {
      passedLevels.push(selectedLevel);
      localStorage.setItem("passedLevels", JSON.stringify(passedLevels));
    }
  }
}