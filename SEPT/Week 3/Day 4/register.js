const registerForm = document.querySelector('.form');

  registerForm.addEventListener('submit', function (e) {
    e.preventDefault(); // stop normal form submission

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm-password').value;

    if (password !== confirm) {
      alert('Passwords do not match!');
      return;
    }

    // Save to localStorage (simple demo only – not secure for real apps)
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Account created successfully!');
    window.location.href = 'login.html';
  });

