function validateForm() {
    var emailOrPhone = document.forms['form']['email'].value;
    var password = document.forms['form']['password'].value;
  
    var email_error = document.getElementById('email_error');
    var pass_error = document.getElementById('pass_error');
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;
  
  
    if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
        email_error.textContent = 'Please provide a valid phone number.';
        alert('Please enter a valid phone number');
        return false;
    } else {
        email_error.textContent = '';
    }
  
    if (password.length < 6) {
        pass_error.textContent = 'Password must be at least 6 characters long.';
        alert('Please enter your correct password');
        return false;
    } else {
        pass_error.textContent = '';
    }
  
    return true;
  }