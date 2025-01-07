document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    };
    
    localStorage.setItem('registrationData', JSON.stringify(formData));
    window.location.href = "login.html";
    alert('Ma\'lumotlar saqlandi! Brauzeringizning localStorage qismida ko\'rishingiz mumkin.');
    displaySavedData();
  });

  displaySavedData();
});
