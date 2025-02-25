document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // ... (phần xử lý đăng nhập của bạn) ...

  // Ví dụ: Nếu đăng nhập thành công
  if (username === "test" && password === "password") {
    // Lưu tên người dùng vào localStorage
    localStorage.setItem('username', username);

    // Chuyển hướng đến trang thành công
    window.location.href = 'success.html';
  } else {
    alert("Tên đăng nhập hoặc mật khẩu không đúng.");
  }
});
