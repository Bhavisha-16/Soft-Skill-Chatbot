const skill = localStorage.getItem("skill");
const level = localStorage.getItem("level");

document.getElementById("title").innerText =
  `Training: ${skill} (${level})`;

function goNext() {
  alert("Quiz & AI Chatbot will start here");
}
