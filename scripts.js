document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessageDiv = document.getElementById('error-message');

  const isValidLogin = (username === "test" && password === "password");

  if (isValidLogin) {
    errorMessageDiv.textContent = "Đăng nhập thành công!";
    errorMessageDiv.style.color = "green";
    localStorage.setItem('username', username);
    setTimeout(() => {
      window.location.href = 'homealone.html';
    }, 1500);
  } else {
    errorMessageDiv.textContent = "Tên đăng nhập hoặc mật khẩu không đúng.";
    errorMessageDiv.style.color = "red";
  }
});
