// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevents form submission if validation fails
    
    // Get form elements
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('lastname');
    const emailInput = document.getElementById('email');
    const mobileInput = document.getElementById('mobileno');
    const genderInput = document.getElementById('gender');
    const dobInput = document.getElementById('dob');
    const addressInput = document.getElementById('address');
    const cityInput = document.getElementById('city');
    const pincodeInput = document.getElementById('pincode');
    const qualificationInput = document.getElementById('qualification');
    const specializationInput = document.getElementById('specialization');
    const passwordInput = document.getElementById('password');
    
    // Regular expressions for validation
    const nameRegex = /^[A-Za-z]{3,6}$/;
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Add more regex for other fields if needed
    
    // Validation for first name
    if (!nameRegex.test(firstNameInput.value)) {
      alert('First Name should have 3-6 alphabetic characters only!');
      firstNameInput.focus();
      return false;
    }
    
    // Validation for last name
    if (!nameRegex.test(lastNameInput.value)) {
      alert('Last Name should have 3-9 alphabetic characters only!');
      lastNameInput.focus();
      return false;
    }
    if (!emailRegex.test(emailInput.value)) {
      alert('pleazz enter valid email!');
      emailInput.focus();
      return false;
    }
        // Validation for mobile number
    if (!mobileRegex.test(mobileInput.value)) {
        alert('Mobile number should have 10 digits only!');
        mobileInput.focus();
        return false;
      }
    
    // If all validations pass, you can proceed with form submission
    alert('Form submitted successfully!');
    return true;
  }
  
  // Event listener for form submission
  document.getElementById('registration').addEventListener('submit', validateForm);