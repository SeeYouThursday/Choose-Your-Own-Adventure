//signup form
async function signupFormHandler(event) {
    event.preventDefault();
    
    //collect values
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(username);
    console.log(password);

    //POST request to api endpoint
    if (username && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response);

        //redirect to dashboard
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);