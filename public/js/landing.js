document
  .querySelector('body')
  .setAttribute('style', "background-image: url('/images/landing-background.png'); background-size: cover; height: 100vh; background-color: black;");

async function landingFormHandler(event) {
    event.preventDefault();

    const response = await fetch('/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    //redirect to homepage
    if (response.ok) {
        document.location.replace('/home');
    } else {
        alert(response.statusText);
    }
};

document
    .querySelector('#landing-form')
    .addEventListener('submit', landingFormHandler);