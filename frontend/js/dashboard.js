// js/dashboard.js

async function checkAuth() {
  const { data } = await window.supabaseClient.auth.getUser();

  if (!data.user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("welcome").innerText =
      "Welcome to Soft Skills AI Chatbot, " + data.user.email;
  }
}

checkAuth();

function startTraining() {
  const skill = document.getElementById("skill").value;
  const level = document.getElementById("level").value;

  if (!skill || !level) {
    alert("Please select both skill and level");
    return;
  }

  localStorage.setItem("skill", skill);
  localStorage.setItem("level", level);

  alert("Training started for " + skill + " (" + level + ")");
}

async function logout() {
  await window.supabaseClient.auth.signOut();
  window.location.href = "index.html";
}
