// const { validation } = require('./helpers/validation');

document
  .querySelector('body')
  .setAttribute(
    'style',
    "background-image: url('/images/signup.png'); background-size: cover; height: 100vh; background-color: black;"
  );

const usernameCheck = async () => {
  const usernameInput = document.querySelector('#username-signup');
  const username = usernameInput.value.trim();
  const response = await fetch(`/api/users/${username}`);

  const validateUsernameData = await response.json();
  // emailInput.classList.add('is-invalid');

  // checks for server side errors
  return validateUsernameData;
};

const emailCheck = async () => {
  const emailInput = document.querySelector('#email-signup');
  const email = emailInput.value.trim();
  const response = await fetch(`/api/users/${email}`);

  const validateUsernameData = await response.json();
  // emailInput.classList.add('is-invalid');
  // checks for server side errors
  return validateUsernameData;
};
//signup form
async function signupFormHandler(event) {
  event.preventDefault();
  //validate form
  // validation();
  //collect values
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  console.log(username);
  console.log(password);
  console.log(email);

  //POST request to api endpoint
  if (username && password && email) {
    const validateUsernameData = usernameCheck();
    const validateEmailData = emailCheck();

    if (validateUsernameData) {
      const usernameInput = document.querySelector('#username-signup');
      usernameInput.classList.add('is-invalid');
    } else if (validateEmailData) {
      const emailInput = document.querySelector('#email-signup');
      emailInput.classList.add('is-invalid');
    } 
    if (validateEmailData || validateUsernameData) {
      return;
    }
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        email,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    //redirect to dashboard
    if (response.ok) {
      const confetti = new JSConfetti();
      await confetti.addConfetti({
        emojis: ['🐓'],
        emojiSize: 40,
        confettiNumber: 100,
      });
      document.location.replace('/dashboard');
    } else {
      //TODO: change to a modal!
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
