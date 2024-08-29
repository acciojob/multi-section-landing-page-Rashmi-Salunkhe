//your JS code here. If required.
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear any previous errors
    clearErrors();

    let isValid = true;

    // Validate Full Name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        showError('nameError', 'Full Name is required.');
        isValid = false;
    }

    // Validate Email Address
    const email = document.getElementById('email').value.trim();
    if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate Phone Number (Optional)
    const phone = document.getElementById('phone').value.trim();
    if (phone !== '' && !validatePhone(phone)) {
        showError('phoneError', 'Please enter a valid phone number.');
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message.length < 100) {
        showError('messageError', 'Message must be at least 100 characters long.');
        isValid = false;
    }

    if (isValid) {
        // Form is valid, handle form submission here
        alert('Form submitted successfully!');
        this.reset(); // Reset the form
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
}
