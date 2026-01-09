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
    : "Password updated successfully. Redirecting to login...";

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
