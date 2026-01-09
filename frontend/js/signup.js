async function signup() {
  const first = val("firstName");
  const last = val("lastName");
  const email = val("email");
  const pass = val("password");
  const confirm = val("confirmPassword");
  const msg = message();

  if (!first || !last || !email || !pass || !confirm) {
    msg.innerText = "All fields are required";
    return;
  }

  if (pass !== confirm) {
    msg.innerText = "Passwords do not match";
    return;
  }

  const { error } = await supabaseClient.auth.signUp({
    email,
    password: pass,
    options: {
      data: { first_name: first, last_name: last },
    },
  });
  if (error) {
    msg.innerText = error.message;
    return;
  }

  // redirect to profile setup so user can choose skills and level
  msg.innerText = 'Account created successfully. Redirecting to profile setup...';
  setTimeout(() => {
    window.location.href = 'profile-setup.html';
  }, 900);
}

function val(id) {
  return document.getElementById(id).value.trim();
}
function message() {
  return document.getElementById("message");
}
