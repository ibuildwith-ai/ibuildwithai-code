// =============================================================================
// CONTACT FORM - Client-side validation and form handling
// =============================================================================

(function () {
    'use strict';

    // Configuration - Make easily configurable
    const CONFIG = {
        errorMessages: {
            firstName: "First name is required",
            lastName: "Last name is required",
            email: "Please enter a valid email address",
            emailInvalid: "Email format is invalid",
            reason: "Please select a reason for contacting us",
            message: "Message is required",
        },
        successMessage: "We'll get back to you within 24 hours.",
        reasonOptions: [
            // Will be configured later - make easily configurable,
            { value: "app-support", text: "I need support with one of your apps." },
            { value: "present", text: "I want you to present at my next event." },,
            { value: "podcast", text: "I want to be a guest on your podcast." },
            { value: "training", text: "I'm interested in getting training from you." },
            { value: "partner-up", text: "I want to partner up with you." },
            { value: "other", text: "Other" }
        ]
    };

    // Form elements
    let form, thankYouMessage;
    let fields = {};

    // Initialize when DOM is ready
    function init() {
        form = document.getElementById('contact-form');
        thankYouMessage = document.getElementById('thank-you-message');

        if (!form || !thankYouMessage) {
            console.error('Contact form elements not found');
            return;
        }

        // Get all form fields
        fields = {
            firstName: document.getElementById('firstName'),
            lastName: document.getElementById('lastName'),
            email: document.getElementById('email'),
            reason: document.getElementById('reason'),
            message: document.getElementById('message')
        };

        setupEventListeners();
        populateReasonDropdown();

    }

    // Setup event listeners
    function setupEventListeners() {
        // Add onBlur validation for each field
        Object.keys(fields).forEach(fieldName => {
            if (fields[fieldName]) {
                fields[fieldName].addEventListener('blur', () => validateField(fieldName));
            }
        });

        // Add form submit handler
        form.addEventListener('submit', handleSubmit);
    }

    // Populate reason dropdown with configurable options
    function populateReasonDropdown() {
        const reasonSelect = fields.reason;
        if (!reasonSelect) return;

        // Clear existing options except the first placeholder
        const placeholder = reasonSelect.querySelector('option[value=""]');
        reasonSelect.innerHTML = '';
        if (placeholder) {
            reasonSelect.appendChild(placeholder);
        }

        // Add configured options
        CONFIG.reasonOptions.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            reasonSelect.appendChild(optionElement);
        });
    }

    // Validate individual field
    function validateField(fieldName) {
        const field = fields[fieldName];
        const errorElement = document.getElementById(fieldName + '-error');

        if (!field || !errorElement) return false;

        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'firstName':
            case 'lastName':
            case 'message':
                if (!field.value.trim()) {
                    isValid = false;
                    errorMessage = CONFIG.errorMessages[fieldName];
                }
                break;

            case 'email':
                if (!field.value.trim()) {
                    isValid = false;
                    errorMessage = CONFIG.errorMessages.email;
                } else if (!isValidEmail(field.value)) {
                    isValid = false;
                    errorMessage = CONFIG.errorMessages.emailInvalid;
                }
                break;


            // Reason is optional, so no validation needed
            case 'reason':
                break;
        }

        // Update field state and show/hide error
        updateFieldState(field, errorElement, isValid, errorMessage);
        return isValid;
    }

    // Update field visual state and error message
    function updateFieldState(field, errorElement, isValid, errorMessage) {
        const formGroup = field.closest('.form-group');

        if (isValid) {
            formGroup.classList.remove('has-error');
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        } else {
            formGroup.classList.add('has-error');
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
        }
    }

    // Email validation helper - requires valid TLD (min 2 characters)
    function isValidEmail(email) {
        // More strict: requires at least 2 character TLD (.com, .ai, etc.)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        // Validate all fields
        const fieldsToValidate = Object.keys(fields);
        const validations = fieldsToValidate.map(fieldName => validateField(fieldName));
        const fieldsValid = validations.every(valid => valid);

        if (fieldsValid) {
            proceedWithSubmission();
        } else {
            // Focus on first invalid field
            const firstInvalidField = fieldsToValidate.find(fieldName => {
                const errorElement = document.getElementById(fieldName + '-error');
                return errorElement && errorElement.classList.contains('show');
            });

            if (firstInvalidField && fields[firstInvalidField]) {
                fields[firstInvalidField].focus();
            }
        }
    }


    // Proceed with actual form submission after validation
    async function proceedWithSubmission() {
        // Final validation
        const allValidations = Object.keys(fields).map(fieldName => validateField(fieldName));
        const allValid = allValidations.every(valid => valid);

        if (!allValid) {
            console.error('Form submission failed final validation');
            return;
        }

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Prepare form data
            const formData = {
                firstName: fields.firstName.value.trim(),
                lastName: fields.lastName.value.trim(),
                email: fields.email.value.trim(),
                reason: fields.reason.value || '',
                message: fields.message.value.trim()
            };

            // Submit to Netlify function
            const response = await fetch('https://ibuildwithai.netlify.app/.netlify/functions/contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Success - show success message
                showSuccessMessage();
            } else {
                // Server returned an error
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);

            // Show error message to user
            alert('Sorry, there was an error sending your message. Please try again later or contact us directly.');

            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }

    // Show success message and hide form
    function showSuccessMessage() {
        // Hide form
        form.style.display = 'none';

        // Update and show thank you message
        const thankYouTitle = thankYouMessage.querySelector('h3');
        const thankYouText = thankYouMessage.querySelector('p');

        if (thankYouTitle) {
            thankYouTitle.textContent = 'Thank you!';
        }
        if (thankYouText) {
            thankYouText.textContent = CONFIG.successMessage;
        }

        thankYouMessage.style.display = 'block';

        // Scroll to thank you message
        thankYouMessage.scrollIntoView({ behavior: 'smooth' });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();