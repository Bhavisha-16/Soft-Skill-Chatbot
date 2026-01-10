// 1️⃣ Initialize session from URL token
(async function initSession() {
  const hash = window.location.hash;
  if (!hash) return;

  const params = new URLSearchParams(hash.substring(1));
  const accessToken = params.get("access_token");
  const refreshToken = params.get("refresh_token");

  if (accessToken && refreshToken) {
    await supabaseClient.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  }
})();

// 2️⃣ Update password
async function updatePassword() {
  const pass = val("newPassword");
  const confirm = val("confirmNewPassword");
  const msg = message();
  const button = document.getElementById("resetSubmit");
  const passInput = document.getElementById("newPassword");
  const confirmInput = document.getElementById("confirmNewPassword");

  msg.innerText = "";
  if (passInput) passInput.classList.remove("input-error");
  if (confirmInput) confirmInput.classList.remove("input-error");

  // Password requirements
  const requirements = [
    { re: /.{8,}/, msg: "at least 8 characters" },
    { re: /[A-Z]/, msg: "an uppercase letter" },
    { re: /[a-z]/, msg: "a lowercase letter" },
    { re: /[0-9]/, msg: "a number" },
    { re: /[^A-Za-z0-9]/, msg: "a special character (e.g. @, #, $)" },
  ];

  if (!pass || !confirm) {
    msg.innerText = "Please fill both password fields.";
    if (!pass && passInput) passInput.classList.add("input-error");
    if (!confirm && confirmInput) confirmInput.classList.add("input-error");
    setTimeout(() => {
      msg.innerText = "";
      if (passInput) passInput.classList.remove("input-error");
      if (confirmInput) confirmInput.classList.remove("input-error");
    }, 2000);
    return;
  }

  if (pass !== confirm) {
    msg.innerText = "Passwords do not match.";
    if (passInput) passInput.classList.add("input-error");
    if (confirmInput) confirmInput.classList.add("input-error");
    setTimeout(() => {
      msg.innerText = "";
      if (passInput) passInput.classList.remove("input-error");
      if (confirmInput) confirmInput.classList.remove("input-error");
    }, 2000);
    return;
  }

  // Check requirements
  const failed = requirements.filter(r => !r.re.test(pass));
  if (failed.length > 0) {
    msg.innerText = "Password must contain: " + failed.map(r => r.msg).join(", ") + ".";
    if (passInput) passInput.classList.add("input-error");
    setTimeout(() => {
      msg.innerText = "";
      if (passInput) passInput.classList.remove("input-error");
    }, 3000);
    return;
  }

  if (button) button.disabled = true;
  msg.innerText = "Updating password...";

  try {
    const { error } = await supabaseClient.auth.updateUser({ password: pass });

    if (error) {
      msg.innerText = error.message;
      if (button) button.disabled = false;
      setTimeout(() => { msg.innerText = ""; }, 2500);
      return;
    }

    msg.innerText = "Password updated successfully. Redirecting to login...";
    setTimeout(() => {
      try { supabaseClient.auth.signOut(); } catch (e) {}
      window.location.href = "index.html";
    }, 1200);
  } catch (err) {
    msg.innerText = err.message || "Unexpected error";
    if (button) button.disabled = false;
    setTimeout(() => { msg.innerText = ""; }, 2500);
  }
}

function val(id) {
  return document.getElementById(id).value.trim();
}

function message() {
  return document.getElementById("message");
}

// attach form handler
document.getElementById("resetPasswordForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  updatePassword();
});
