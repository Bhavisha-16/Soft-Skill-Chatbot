let selectedPersona, selectedSkill, selectedLevel;

function startTraining() {
  selectedPersona = document.getElementById("persona").value;
  selectedSkill = document.getElementById("skill").value;
  selectedLevel = document.getElementById("level").value;

  if (selectedLevel !== "Beginner") {
    validateQuiz();
  } else {
    alert("Beginner training started");
  }
}
