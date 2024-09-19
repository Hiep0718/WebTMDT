document.addEventListener('DOMContentLoaded', () => {
    // Kiểm tra người dùng đã đăng nhập chưa
    const loggedInUser = localStorage.getItem('loggedInUser');
    const logoutButton = document.getElementById('logoutButton');
    // Lấy phần tử từ DOM
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const usernameDisplay = document.getElementById('usernameDisplay');
  
    // Nếu có người dùng đã đăng nhập, ẩn nút và hiển thị username
    if (loggedInUser != null) {
      // Sử dụng class để ẩn
      document.querySelector('.btn-outline-light.me-2').style.display = 'none';
      document.querySelector('.btn-outline-light.me-3').style.display = 'none';
      usernameDisplay.style.display = 'inline';  // Hiển thị tên người dùng
      usernameDisplay.textContent = `Xin chào,${loggedInUser}, `;  // Hiển thị tên người dùng
    }

    if (loggedInUser) {
    logoutButton.style.display = 'inline';  // Hiển thị nút đăng xuất
    }

    logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');  // Xóa thông tin đăng nhập
    window.location.reload();  // Tải lại trang để cập nhật giao diện
    });

  });
  