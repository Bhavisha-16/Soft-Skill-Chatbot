async function sendResponse() {
  const responseText = document.getElementById("userResponse").value;

  const res = await fetch("http://127.0.0.1:8000/evaluate/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      persona: selectedPersona,
      skill: selectedSkill,
      level: selectedLevel,
      response: responseText
    })
  });

  const data = await res.json();
  document.getElementById("feedback").innerText = data.feedback;
}