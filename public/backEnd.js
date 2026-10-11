function handleLogin() {
  const username = document.getElementById('identifier').value.trim();
  const password = document.getElementById('password').value;

  const signInBtn = document.getElementById('signInBtn');
  const btnText = document.getElementById('btnText');
  const btnIcon = document.getElementById('btnIcon');
  const btnLoader = document.getElementById('btnLoader');

  btnText.textContent = "Authenticating...";
  btnIcon.classList.add('hidden');
  btnLoader.classList.remove('hidden');
  signInBtn.disabled = true;

  setTimeout(() => {
    if (username === "admin" && password === "test2") {
      btnText.textContent = "Verified!";
    } else {
      btnText.textContent = "Invalid username or password";
    }

    btnLoader.classList.add('hidden');

    setTimeout(() => {
      btnText.textContent = "Sign In";
      btnIcon.classList.remove('hidden');
      signInBtn.disabled = false;
    }, 2000);
  }, 1000);
}

