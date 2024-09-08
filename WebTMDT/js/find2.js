// Tệp find.js

const products = [
    { name: "Bánh thuyền hạt Khánh Giang", url: "WebTMDT/html/ChiTietSanPhamDEMO.html" },
    { name: "Bánh tráng Rong biển nướng sẵn Sachi", url: "WebTMDT/html/ChiTietBanhTrangSaChi.html" },
    { name: "Bánh hồng Bà Điền", url: "WebTMDT/html/ChiTietBanhHongBaDien.html" },
    { name: "Bánh cốm Phong Nga", url: "WebTMDT/html/ChiTietBanhCom.html" },
    { name: "Bánh ít lá gai Hoàng Đông", url: "WebTMDT/html/ChiTiecBanhIt.html" },
    { name: "Dầu phộng Công Chính", url: "WebTMDT/html/ChiTiecDauPhongCC.html" },
    { name: "Dầu phộng Mỹ Hóa", url: "WebTMDT/html/ChiTietDauMyHoa.html" },
    { name: "Nước mắm nhĩ Thái An", url: "WebTMDT/html/ChiTietNuocMam.html" },
    { name: "Rượu bầu đá Thành Tâm", url: "WebTMDT/html/ChiTietRuouBauDa.html" },
    { name: "Rượu Đông trùng hạ thảo Lộc Tín", url: "WebTMDT/html/ChiTietRuouDongT.html" },
    { name: "Rượu nước nóng", url: "WebTMDT/html/ChiTietRuouNuocNong.html" },
    { name: "Chả lụa Ngọc Nga", url: "WebTMDT/html/CHiTietChaLuaNgocNga.html" },
    { name: "Bưởi da xanh An Lão", url: "WebTMDT/html/ChiTietBuoiDaXanh.html" },
    { name: "Trà thảo mộc Chè dây - Dạ Cẩm", url: "WebTMDT/html/ChiTietCheDay.html" },
    { name: "Trà Dung", url: "WebTMDT/html/ChiTietTraDung.html" },
    { name: "Yến sào Bảo Khánh", url: "WebTMDT/html/ChiTietYenSao.html" },
    { name: "Tinh dầu tràm xứ Nẫu", url: "WebTMDT/html/ChiTietTinhDauTram.html" },
    // Thêm các sản phẩm khác nếu cần
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const form = document.querySelector('form.search-container');

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

    // Ẩn danh sách kết quả khi nhấn ra ngoài
    document.addEventListener('click', function(event) {
        if (!form.contains(event.target)) {
            searchResults.style.display = 'none';
        }
    });
});
