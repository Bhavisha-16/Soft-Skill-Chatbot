async function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Call your backend API to create a new user
  const res = await fetch('http://127.0.0.1:8000/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  if (data.success) {
    alert('Sign up successful!');
    window.location.href = 'index.html';
  } else {
    alert('Sign up failed: ' + data.message);
  }
}

async function forgotPassword() {
  const email = prompt('Enter your email to reset password:');
  // Call your backend API to send reset password email
  const res = await fetch('http://127.0.0.1:8000/auth/forgot-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });

  const data = await res.json();
  if (data.success) {
    alert('Reset password email sent!');
  } else {
    alert('Error: ' + data.message);
  }
}