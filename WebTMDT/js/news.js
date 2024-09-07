document.addEventListener('DOMContentLoaded', function() {
    displayNews();
});

document.getElementById('newsForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('preview').src;

    const news = {
        title: title,
        description: description,
        image: image
    };

    let newsList = JSON.parse(localStorage.getItem('newsList')) || [];
    newsList.push(news);
    localStorage.setItem('newsList', JSON.stringify(newsList));

    alert('Tin tức đã được thêm thành công!');

    document.getElementById('newsForm').reset();
    document.getElementById('preview').style.display = 'none';
    document.getElementById('newsFormContainer').style.display = 'none';
    document.getElementById('showFormBtn').textContent = 'Thêm Tin Tức';

    displayNews();
});

function displayNews() {
    const newsContainer = document.querySelector('.news-list');
    newsContainer.innerHTML = '';

    let newsList = JSON.parse(localStorage.getItem('newsList')) || [];

    newsList.forEach(function(news, index) {
        const newsItem = `
            <div class="news-item">
                <img src="${news.image}" alt="News Image">
                <div class="news-item-content">
                    <h5>${news.title}</h5>
                    <p>${news.description}</p>
                    <a href="/WebTMDT/news_detail.html" class="btn btn-primary">Xem chi tiết</a>
                    <button class="btn btn-danger btn-sm delete-news" data-index="${index}">Xóa</button>
                </div>
            </div>
        `;
        newsContainer.innerHTML += newsItem;
    });

    // Thêm sự kiện cho các nút xóa
    document.querySelectorAll('.delete-news').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            deleteNews(index);
        });
    });
}

function deleteNews(index) {
    let newsList = JSON.parse(localStorage.getItem('newsList')) || [];
    newsList.splice(index, 1); // Xóa mục tin tức tại chỉ số 'index'
    localStorage.setItem('newsList', JSON.stringify(newsList));
    displayNews(); // Cập nhật danh sách tin tức sau khi xóa
}

document.getElementById('showFormBtn').addEventListener('click', function() {
    const formContainer = document.getElementById('newsFormContainer');
    if (formContainer.style.display === 'none' || formContainer.style.display === '') {
        formContainer.style.display = 'block';
        document.getElementById('showFormBtn').textContent = 'Ẩn Form';
    } else {
        formContainer.style.display = 'none';
        document.getElementById('showFormBtn').textContent = 'Thêm Tin Tức';
    }
});

// Xem trước ảnh
document.getElementById('image').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview').src = e.target.result;
            document.getElementById('preview').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});
