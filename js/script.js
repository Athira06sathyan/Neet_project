
const buttons = document.querySelectorAll('.color-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
  });
});
const buttons1 = document.querySelectorAll('.color-button-start');

buttons1.forEach(button => {
  button.addEventListener('click', () => {
    buttons1.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    window.location.href = 'Questions.html';
  });
});

const buttons2 = document.querySelectorAll('.color-button-dashboard');
buttons2.forEach(button => {
  button.addEventListener('click', () => {
    buttons2.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    window.location.href = 'Subject.html';
  });
});

const buttons3 = document.querySelectorAll('.color-button-next');
buttons3.forEach(button => {
  button.addEventListener('click', () => {
    buttons3.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    window.location.href = 'Results.html';
  });
});

const buttons4 = document.querySelectorAll('.color-button-answers');
buttons4.forEach(button => {
  button.addEventListener('click', () => {
    buttons4.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    window.location.href = 'Checkans.html';
  });
});

const buttons5 = document.querySelectorAll('.color-button-back');
buttons5.forEach(button => {
  button.addEventListener('click', () => {
    buttons5.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    window.location.href = 'Questions.html';
  });
});

const buttons6 = document.querySelectorAll('.color-button-back');
buttons6.forEach(button => {
  button.addEventListener('click', () => {
    buttons6.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    window.location.href = 'Questions.html';
  });
});

const buttons7 = document.querySelectorAll('.color-button-back');
buttons7.forEach(button => {
  button.addEventListener('click', () => {
    buttons7.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    window.location.href = 'Dashboard.html';
  });
});


// Get all option elements
const options = document.querySelectorAll('.Option');

// Add click event listener to each option
options.forEach(option => {
    option.addEventListener('click', () => {
        // Reset all option icons
        options.forEach(option => {
            option.classList.remove('correct', 'wrong');
        });

        // Check correctness and add appropriate class
        if (option.getAttribute('data-correct') === 'true') {
            option.classList.add('correct');
        } else {
            option.classList.add('wrong');
        }
    });
});
