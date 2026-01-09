// js/auth.js

async function signup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!email || !password) {
    message.innerText = "Email and password required";
    return;
  }

  const { error } = await window.supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    message.innerText = "Signup error: " + error.message;
  } else {
    message.innerText = "Signup successful! Now login.";
  }
}

async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!email || !password) {
    message.innerText = "Email and password required";
    return;
  }

  const { error } = await window.supabase.auth.signInWithPassword({
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
