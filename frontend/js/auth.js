async function signup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const { error } = await window.supabaseClient.auth.signUp({
    email,
    password,
  });

  if (error) {
    message.innerText = "Signup error: " + error.message;
  } else {
    message.innerText =
      "✅ Your account has been created on Soft Skills AI Chatbot. Please login to continue.";
  }
}

async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const { error } = await window.supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    message.innerText = "Login error: " + error.message;
  } else {
    message.innerText = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  }
}
