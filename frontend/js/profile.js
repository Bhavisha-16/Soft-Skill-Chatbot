async function saveProfile() {
  const msg = document.getElementById('message');
  const button = document.getElementById('profileSave');
  msg.innerText = '';

  const checked = Array.from(document.querySelectorAll('input[name="skill"]:checked'))
    .map((el) => el.value);
  const level = document.getElementById('trainingLevel').value;
  const role = document.getElementById('role').value;

  if (checked.length === 0) {
    msg.innerText = 'Please select at least one skill.';
    return;
  }

  if (button) button.disabled = true;
  msg.innerText = 'Saving profile...';

  try {
    // store as JSON in user metadata
    const { error } = await supabaseClient.auth.updateUser({
      data: {
        skills: JSON.stringify(checked),
        training_level: level,
        role,
      },
    });

    if (error) {
      msg.innerText = error.message;
      if (button) button.disabled = false;
      return;
    }

    msg.innerText = 'Profile saved. Redirecting to dashboard...';
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1000);
  } catch (err) {
    msg.innerText = err.message || 'Unexpected error while saving profile.';
    if (button) button.disabled = false;
  }
}
