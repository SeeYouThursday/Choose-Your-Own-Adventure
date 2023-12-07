// const { validation } = require('./helpers/validation');
document
  .querySelector('body')
  .setAttribute(
    'style',
    "background-image: url('/images/login.png'); background-size: cover; height: 100vh; background-color: black;"
  );

// check for validation before allowing form to be submitted
// validation();

//login submission form
async function loginFormHandler(event) {
  event.preventDefault();
  //collect values
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  //POST request to api endpoint
  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    //redirect to dashboard
    if (response.ok) {
      const confetti = new JSConfetti();
      await confetti.addConfetti({
        emojis: ['🐠'],
        emojiSize: 40,
        confettiNumber: 100,
    });
      document.location.replace('/dashboard');
    } else {
      // alert(response.statusText);
      const loginAlert = document.getElementById('submit');
      const loginError = document.getElementById('login-error');
      const loginErrorExists = () =>
        loginError
          ? remove(loginError)
          : loginAlert.insertAdjacentHTML(
              'afterend',
              "<div class='alert alert-warning' id='login-error' role='alert'>Incorrect username or password</div>"
            );
      loginErrorExists();
      // loginAlert.classList.add('visible');
      // <div class="alert alert-warning invisible" role="alert">
      //   Incorrect username or password
      // </div>;
    }
  }
}

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
