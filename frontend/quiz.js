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
    selectedLevel = selectedLevel === "Expert" ? "Intermediate" : "Beginner";
  } else {
    alert("Quiz passed. Continue training.");
  }
}