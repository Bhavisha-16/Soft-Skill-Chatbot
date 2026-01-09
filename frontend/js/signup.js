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

  msg.innerText = error
    ? error.message
    : "Account created successfully! Login now.";
}

function val(id) {
  return document.getElementById(id).value.trim();
}
function message() {
  return document.getElementById("message");
}
