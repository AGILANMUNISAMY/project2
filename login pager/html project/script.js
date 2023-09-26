const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});

function validateInput() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const confirm_passwordVal = confirm_password.value.trim();

    if (usernameVal === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
    } else if (!validateEmail(emailVal)) { // Changed ValidateEmail to validateEmail
        setError(email, 'Please enter a valid email');
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        setError(password, 'Password is required');
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
    } else {
        setSuccess(password);
    }

    if (confirm_passwordVal === '') {
        setError(confirm_password, 'Confirm password is required');
    } else if (confirm_passwordVal !== passwordVal) {
        setError(confirm_password, 'Passwords do not match');
    } else {
        setSuccess(confirm_password);
    }
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error'); // Changed getElementById to querySelector

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error'); // Changed getElementById to querySelector

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

function validateEmail(email) { // Renamed ValidateEmail to validateEmail
    return email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
}
