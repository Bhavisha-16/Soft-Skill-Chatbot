async function signup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  const { error } = await window.supabaseClient.auth.signUp({
    email,
    password,
  });

  message.innerText = error
    ? "Signup error: " + error.message
    : "Signup successful! Now login.";
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
    message.innerText = "Login successful!";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  }
}
