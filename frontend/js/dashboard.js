async function checkAuth() {
  const { data } = await supabaseClient.auth.getUser();
  if (!data.user) {
    location.href = "index.html";
    return;
  }
  document.getElementById("welcome").innerText =
    "Welcome, " + (data.user.user_metadata.first_name || "User") + "!";
  document.getElementById("userEmail").innerText = data.user.email;
  document.getElementById("userField").innerText = data.user.user_metadata.field || "-";
}
checkAuth();

function startTraining() {
  const skill = document.getElementById("skill").value;
  const level = document.getElementById("level").value;

  if (!skill || !level) {
    alert("Select skill and level");
    return;
  }

  // Only allow direct access to higher levels if user has passed previous level
  const allowedLevels = ["beginner"];
  const passedLevels = JSON.parse(localStorage.getItem("passedLevels") || "[]");
  if (passedLevels.includes("intermediate")) allowedLevels.push("intermediate");
  if (passedLevels.includes("advanced")) allowedLevels.push("advanced");
  if (passedLevels.includes("expert")) allowedLevels.push("expert");

  if (!allowedLevels.includes(level)) {
    alert("You must pass the quiz for the previous level before accessing this level.");
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
