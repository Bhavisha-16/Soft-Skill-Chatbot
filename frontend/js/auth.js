async function login() {
  const email = val("email");
  const password = val("password");
  const msg = message();

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    msg.innerText = error.message;
  } else {
    msg.innerText = "Login successful! Redirecting...";
    setTimeout(() => location.href = "dashboard.html", 1000);
  }
}

async function forgotPassword() {
  const email = val("email");
  const msg = message();

  if (!email) {
    msg.innerText = "Enter your email first";
    return;
  }

  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: "http://127.0.0.1:5500/frontend/reset-password.html",
  });

  msg.innerText = error
    ? error.message
    : "Password reset link sent to your email";
}

function val(id) {
  return document.getElementById(id).value.trim();
}
function message() {
  return document.getElementById("message");
}
