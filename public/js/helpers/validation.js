'use strict';
const { username, email, password } = require('../login');

const validation = () => {
  ///taken from Bootstrap
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      'submit',
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  })();
};

// const usernameEmailValidate = async () => {
//   try {
//     const username = document.querySelector('#username-login').value.trim();
//     // const password = document.querySelector('#password-login').value.trim();
//     const email = document.querySelector('');
//     if (username && email) {
//       const response = await fetch('/api/users/validate/:username/:email', {});
//     }
//   } catch (error) {
//     console.log(error);
//     //TODO Add Alert for error?
//   }
// };

module.exports = validation;
