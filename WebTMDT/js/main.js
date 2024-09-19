// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value)); // Lấy thông tin người dùng từ localStorage
    if (user) {
      // Kiểm tra nếu user tồn tại trong localStorage
      if (user.username === inputUsername.value && user.password === inputPassword.value) {
        localStorage.setItem('loggedInUser', inputUsername.value);
        alert("Đăng Nhập Thành Công");
        window.location.href = "/index.html";
      } else {
        alert("Sai mật khẩu hoặc tên đăng nhập");
      }
    } else {
      alert("Người dùng không tồn tại");
    }
  }
});
