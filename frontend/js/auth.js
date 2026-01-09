async function login() {
  console.log("Login clicked");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(email, password);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    console.error(error);
    alert(error.message);
  } else {
    console.log("Login success", data);
    window.location.href = "dashboard.html";
  }
}

async function signup() {
  console.log("Signup clicked");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    console.error(error);
    alert(error.message);
  } else {
    alert("Signup successful! Please login.");
  }
}
