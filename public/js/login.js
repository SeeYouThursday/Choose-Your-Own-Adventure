document
  .querySelector('body')
  .setAttribute('style', "background-image: url('/images/login.png'); background-size: cover; height: 100vh; background-color: black;");



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
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
