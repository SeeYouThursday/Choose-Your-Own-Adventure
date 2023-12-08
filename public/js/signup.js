// const { validation } = require('./helpers/validation');

document
  .querySelector('body')
  .setAttribute(
    'style',
    "background-image: url('/images/signup.png'); background-size: cover; height: 100vh; background-color: black;"
  );

const usernameCheck = async () => {
  const username = document.querySelector('#username-signup').value.trim();
  const response = await fetch(`/api/users/username/${username}`);

  if (!response.ok) {
    console.error(`Error: ${response.status}`);
    return false;
  }

  const validateUsernameData = await response.json();

  return validateUsernameData.exists; // Return true if the username already exists
};

const emailCheck = async () => {
  const email = document.querySelector('#email-signup').value.trim();
  const response = await fetch(`/api/users/email/${email}`);

  if (!response.ok) {
    console.error(`Error: ${response.status}`);
    return false;
  }

  const validateEmailData = await response.json();

  return validateEmailData.exists; // Return true if the email already exists
};

//signup form
async function signupFormHandler(event) {
  event.preventDefault();

  // Collect values
  const usernameElement = document.querySelector('#username-signup');
  const username = usernameElement.value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const emailElement = document.querySelector('#email-signup');
  const email = emailElement.value.trim();

  // Check if username and email are unique
  const [usernameExists, emailExists] = await Promise.all([
    usernameCheck(),
    emailCheck(),
  ]);

  if (usernameExists) {
    usernameElement.classList.add('is-invalid'); // Add the "is-invalid" class to the username input element
    console.log('Username already exists');
  }

  if (emailExists) {
    emailElement.classList.add('is-invalid'); // Add the "is-invalid" class to the email input element
    console.log('Email already exists');
  }

  if (usernameExists || emailExists) {
    setTimeout(() => {
      window.location.reload();
    }, 2000); // Reload the page after 2 seconds
    return; // Return early to prevent the POST request from being sent
  }

  // POST request to api endpoint
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

    // Log the response
    if (response.ok) {
      console.log('Signup successful');
      window.location.replace('/dashboard');
    } else {
      console.log('Signup failed');
      const responseData = await response.json();
      console.log(responseData);
    }
  }
}

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
