// validation form register and register user local storage
const inputUsernameRegister = document.querySelector("#username");
const inputPasswordRegister = document.querySelector("#password");
const inputRePasswordRegister = document.querySelector("#repassword");
const btnRegister = document.querySelector(".signup__signInButton");


// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
    return;
  }
  let check = inputPasswordRegister == inputRePasswordRegister;
  if(
    check
  ) {
    alert("Mật khẩu nhập lại không khớp!!")
    return;
  } else {
    // array user
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
  }
});
