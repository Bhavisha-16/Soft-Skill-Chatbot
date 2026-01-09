async function login() {
  const email = getVal("email");
  const password = getVal("password");
  const msg = getMsg();

  if (!email || !password) {
    msg.innerText = "Email and password are required";
    return;
  }

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    msg.innerText = error.message;
  } else {
    msg.innerText = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  }
}

async function forgotPassword() {
  const email = getVal("email");
  const msg = getMsg();

  if (!email) {
    msg.innerText = "Please enter your email";
    return;
  }

  // ✅ SAFE, DYNAMIC REDIRECT
  const redirectUrl =
    `${window.APP_CONFIG.BASE_URL}/reset-password.html`;

  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: redirectUrl,
  });

  msg.innerText = error
    ? error.message
    : "Password reset link sent to your email.";
}

function getVal(id) {
  return document.getElementById(id)?.value.trim();
}

function getMsg() {
  return document.getElementById("message");
}
