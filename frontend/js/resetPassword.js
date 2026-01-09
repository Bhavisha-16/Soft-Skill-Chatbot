async function updatePassword() {
  const pass = val("newPassword");
  const confirm = val("confirmPassword");
  const msg = message();

  if (!pass || pass !== confirm) {
    msg.innerText = "Passwords do not match";
    return;
  }

  const { error } = await supabaseClient.auth.updateUser({
    password: pass,
  });

  msg.innerText = error
    ? error.message
    : "Password updated successfully! Login again.";

  if (!error) {
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  }
}

function val(id) {
  return document.getElementById(id).value.trim();
}
function message() {
  return document.getElementById("message");
}
