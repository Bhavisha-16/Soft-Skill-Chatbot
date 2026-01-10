async function login() {
  const email = getVal("email");
  const password = getVal("password");
  const msg = getMsg();
  const passInput = document.getElementById("password");

  if (!email || !password) {
    msg.innerText = "Email and password are required";
    if (passInput) passInput.classList.remove("input-error");
    setTimeout(() => { msg.innerText = ""; }, 1800);
    return;
  }

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    msg.innerText = "Incorrect password. Please try again.";
    if (passInput) passInput.classList.add("input-error");
    setTimeout(() => {
      msg.innerText = "";
      if (passInput) passInput.classList.remove("input-error");
    }, 2000);
  } else {
    msg.innerText = "Login successful! Redirecting...";
    if (passInput) passInput.classList.remove("input-error");
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

  // ✅ Resolve reset URL relative to the current page (works with Live Server)
  const redirectUrl = new URL('reset-password.html', window.location.href).href;

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
