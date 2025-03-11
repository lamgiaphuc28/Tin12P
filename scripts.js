function login() {
  let a = document.getElementById("username").value;
  let b = document.getElementById("password").value;

  if (a === "abc" && b === "123") {
    document.getElementById("success-message").textContent = "Đăng nhập thành công!";
    setTimeout(function() {
      window.location.href = "homealone.html";
    }, 3000);
  } else {
    document.getElementById("error-message").textContent = "Không hợp lệ";
  }
}

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  login();
});
