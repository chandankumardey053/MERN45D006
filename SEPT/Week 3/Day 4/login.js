  const loginForm = document.querySelector('.form');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
      alert('Login successful! Welcome back, ' + localStorage.getItem('fullname') + '!');
      // Optionally redirect to a dashboard page
      // window.location.href = 'dashboard.html';
    } else {
      alert('Invalid email or password.');
    }
  });


