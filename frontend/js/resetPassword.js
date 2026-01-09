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

  msg.innerText = "";

  if (!pass || !confirm) {
    msg.innerText = "Please fill both password fields.";
    return;
  }

  if (pass !== confirm) {
    msg.innerText = "Passwords do not match.";
    return;
  }

  if (pass.length < 8) {
    msg.innerText = "Password must be at least 8 characters.";
    return;
  }

  if (button) button.disabled = true;
  msg.innerText = "Updating password...";

  try {
    const { error } = await supabaseClient.auth.updateUser({ password: pass });

    if (error) {
      msg.innerText = error.message;
      if (button) button.disabled = false;
      return;
    }

    msg.innerText = "Password updated successfully. Redirecting to login...";
    setTimeout(() => {
      // Clear any local session and redirect to login
      try { supabaseClient.auth.signOut(); } catch (e) {}
      window.location.href = "index.html";
    }, 1400);
  } catch (err) {
    msg.innerText = err.message || "Unexpected error";
    if (button) button.disabled = false;
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
