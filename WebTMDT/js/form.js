document.querySelectorAll('.buy-now-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();  // Ngăn chặn hành vi mặc định của nút
        document.getElementById('purchase-form').style.display = 'block';
    });
});

document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Ngăn chặn gửi form mặc định

    // Hiển thị toast thành công
    showToast();
    document.getElementById('purchase-form').style.display = 'none';
});

function showToast() {
    var toast = document.getElementById('toast');
    toast.className = 'toast show';
    setTimeout(function() { toast.className = toast.className.replace('show', ''); }, 3000);
}

function closeForm() {
    document.getElementById('purchase-form').style.display = 'none';
}
