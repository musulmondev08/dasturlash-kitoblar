document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const loginName = document.getElementById('loginName').value;
      const loginPassword = document.getElementById('loginPassword').value;
  
      const savedData = localStorage.getItem('registrationData');
      const loginMessage = document.getElementById('loginMessage');

      if (savedData) {
        const data = JSON.parse(savedData);
        
        if (loginName === data.firstName && loginPassword === data.password) {
          loginMessage.textContent = 'Kirish muvaffaqiyatli!';
          loginMessage.style.color = 'green';

          window.location.href = "home.html"; // O'zingizning dashboard sahifangiz manzilini kiriting
          // Foydalanuvchini kirish sahifasiga yo'naltirish
        } else {
          loginMessage.textContent = 'Ism yoki telefon noto\'g\'ri!';
          loginMessage.style.color = 'red';
        }
      } else {
        loginMessage.textContent = 'Ro\'yxatdan o\'tish ma\'lumotlari topilmadi!';
        loginMessage.style.color = 'red';
      }
    });
  });
  