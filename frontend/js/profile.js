async function saveProfile() {
  const msg = document.getElementById('message');
  const button = document.getElementById('profileSave');
  msg.innerText = '';


  const skill = document.getElementById('skill').value;
  const level = document.getElementById('trainingLevel').value;
  const field = document.getElementById('field').value;

  if (!skill) {
    msg.innerText = 'Please select a skill.';
    return;
  }
  if (!field) {
    msg.innerText = 'Please select your field.';
    return;
  }

  if (button) button.disabled = true;
  msg.innerText = 'Saving profile...';

  try {
    // store as JSON in user metadata
    const { error } = await supabaseClient.auth.updateUser({
      data: {
        skill,
        training_level: level,
        field,
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
