// const { validation } = require('./helpers/validation');

document
  .querySelector('body')
  .setAttribute(
    'style',
    "background-image: url('/images/signup.png'); background-size: cover; height: 100vh; background-color: black;"
  );

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
