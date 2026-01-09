async function checkAuth() {
  const { data } = await supabaseClient.auth.getUser();

  if (!data.user) {
    location.href = "index.html";
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
    alert("Select skill and level");
    return;
  }

  localStorage.setItem("skill", skill);
  localStorage.setItem("level", level);

  location.href = "training.html";
}

async function logout() {
  await supabaseClient.auth.signOut();
  location.href = "index.html";
}
