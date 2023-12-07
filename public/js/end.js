async function doneFormHandler(event) {
    event.preventDefault();

    const response = await fetch('/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    //redirect to homepage
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document
    .querySelector('#back-btn')
    .addEventListener('submit', doneFormHandler);