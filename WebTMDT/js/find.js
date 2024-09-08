// Tệp find.js

const products = [
    { name: "Bánh thuyền hạt Khánh Giang", url: "../html/ChiTietSanPhamDEMO.html" },
    { name: "Bánh tráng Rong biển nướng sẵn Sachi", url: "../html/ChiTietBanhTrangSaChi.html" },
    { name: "Bánh hồng Bà Điền", url: "../html/ChiTietBanhHongBaDien.html" },
    { name: "Bánh cốm Phong Nga", url: "../html/ChiTietBanhCom.html" },
    { name: "Bánh ít lá gai Hoàng Đông", url: "../html/ChiTiecBanhIt.html" },
    { name: "Dầu phộng Công Chính", url: "../html/ChiTiecDauPhongCC.html" },
    { name: "Dầu phộng Mỹ Hóa", url: "../html/ChiTietDauMyHoa.html" },
    { name: "Nước mắm nhĩ Thái An", url: "../html/ChiTietNuocMam.html" },
    { name: "Rượu bầu đá Thành Tâm", url: "../html/ChiTietRuouBauDa.html" },
    { name: "Rượu Đông trùng hạ thảo Lộc Tín", url: "../html/ChiTietRuouDongT.html" },
    { name: "Rượu nước nóng", url: "../html/ChiTietRuouNuocNong.html" },
    { name: "Chả lụa Ngọc Nga", url: "../html/CHiTietChaLuaNgocNga.html" },
    { name: "Bưởi da xanh An Lão", url: "../html/ChiTietBuoiDaXanh.html" },
    { name: "Trà thảo mộc Chè dây - Dạ Cẩm", url: "../html/ChiTietCheDay.html" },
    { name: "Trà Dung", url: "../html/ChiTietTraDung.html" },
    { name: "Yến sào Bảo Khánh", url: "../html/ChiTietYenSao.html" },
    { name: "Tinh dầu tràm xứ Nẫu", url: "../html/ChiTietTinhDauTram.html" },
    // Thêm các sản phẩm khác nếu cần
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const results = products.filter(product => product.name.toLowerCase().includes(query));
        displayResults(results);
    });

    function displayResults(results) {
        searchResults.innerHTML = ''; // Xóa kết quả cũ
        if (results.length === 0) {
            searchResults.style.display = 'none'; // Ẩn danh sách khi không có kết quả
            return;
        }
        searchResults.style.display = 'block'; // Hiển thị danh sách kết quả
        results.forEach(product => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.textContent = product.name;
            li.addEventListener('click', function() {
                window.location.href = product.url; // Chuyển đến trang chi tiết sản phẩm
            });
            searchResults.appendChild(li);
        });
    }
});
