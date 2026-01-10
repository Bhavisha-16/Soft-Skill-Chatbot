async function signup() {
  const first = val("firstName");
  const last = val("lastName");
  const email = val("email");
  const field = val("field");
  const pass = val("password");
  const confirm = val("confirmPassword");
  const msg = message();

  if (!first || !last || !email || !field || !pass || !confirm) {
    msg.innerText = "All fields are required";
    setTimeout(() => { msg.innerText = ""; }, 2000);
    return;
  }

  if (pass !== confirm) {
    msg.innerText = "Passwords do not match";
    setTimeout(() => { msg.innerText = ""; }, 2000);
    return;
  }

  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password: pass,
    options: {
      data: { first_name: first, last_name: last, field },
    },
  });
  if (error) {
    msg.innerText = error.message;
    setTimeout(() => { msg.innerText = ""; }, 2000);
    return;
  }

  if (data && data.session) {
    msg.innerText = 'Account created successfully. Redirecting to dashboard...';
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 900);
  } else {
    msg.innerText = 'Check your email to confirm your account.';
    setTimeout(() => { msg.innerText = ""; }, 3000);
  }
}

function val(id) {
  return document.getElementById(id).value.trim();
}
function message() {
  return document.getElementById("message");
}
