
// //news.html
// if (document.getElementById('newsList')) {
//     const newsList = document.getElementById('newsList');
//     const addNewsForm = document.getElementById('addNewsForm');
//     const deleteNewsForm = document.getElementById('deleteNewsForm');

//     function fetchNews() {
//         fetch('/api/news')
//             .then(response => response.json())
//             .then(data => {
//                 newsList.innerHTML = '';
//                 data.forEach(news => {
//                     const li = document.createElement('li');
//                     li.textContent = `${news.title}: ${news.content}`;
//                     newsList.appendChild(li);
//                 });
//             })
//             .catch(error => console.error('Ошибка при получении новостей:', error));
//     }

//     addNewsForm.addEventListener('submit', event => {
//         event.preventDefault();
//         const formData = new FormData(addNewsForm);
//         const newsData = {
//             title: formData.get('title'),
//             content: formData.get('content')
//         };

//         fetch('/api/news', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newsData)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Ошибка добавления новости');
//             }
//             addNewsForm.reset();
//             fetchNews();
//         })
//         .catch(error => console.error('Ошибка при добавлении новости:', error));
//     });

//     deleteNewsForm.addEventListener('submit', event => {
//         event.preventDefault();
//         const formData = new FormData(deleteNewsForm);
//         const newsId = formData.get('id');

//         fetch(`/api/news/${newsId}`, {
//             method: 'DELETE'
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Ошибка удаления новости');
//             }
//             deleteNewsForm.reset();
//             fetchNews();
//         })
//         .catch(error => console.error('Ошибка при удалении новости:', error));
//     });

//     window.addEventListener('DOMContentLoaded', fetchNews);
// }

//users.html
if (document.getElementById('usersList')) {
    const usersList = document.getElementById('usersList');
    const searchUserForm = document.getElementById('searchUserForm');

    function fetchUsers() {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => {
                usersList.innerHTML = '';
                data.forEach(user => {
                    const li = document.createElement('li');
                    li.textContent = `ID: ${user.id}, Имя: ${user.name}, Возраст: ${user.age}`;
                    usersList.appendChild(li);
                });
            })
            .catch(error => console.error('Ошибка при получении пользователей:', error));
    }

    searchUserForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(searchUserForm);
        const userId = formData.get('id');

        fetch(`/api/users/${userId}`)
            .then(response => response.json())
            .then(user => {
                usersList.innerHTML = '';
                const li = document.createElement('li');
                li.textContent = `ID: ${user.id}, Имя: ${user.name}, Возраст: ${user.age}`;
                usersList.appendChild(li);
            })
            .catch(error => console.error('Ошибка при поиске пользователя:', error));
    });

    window.addEventListener('DOMContentLoaded', fetchUsers);
}

//announcements.html
// if (document.getElementById('announcementsList')) {
//     const announcementsList = document.getElementById('announcementsList');
//     const addAnnouncementForm = document.getElementById('addAnnouncementForm');
//     const deleteAnnouncementForm = document.getElementById('deleteAnnouncementForm');

//     function fetchAnnouncements() {
//         fetch('/api/announcements')
//             .then(response => response.json())
//             .then(data => {
//                 announcementsList.innerHTML = '';
//                 data.forEach(announcement => {
//                     const li = document.createElement('li');
//                     li.textContent = `${announcement.user}: ${announcement.content}`;
//                     announcementsList.appendChild(li);
//                 });
//             })
//             .catch(error => console.error('Ошибка при получении объявлений:', error));
//     }

//     addAnnouncementForm.addEventListener('submit', event => {
//         event.preventDefault();
//         const formData = new FormData(addAnnouncementForm);
//         const announcementData = {
//             content: formData.get('content')
//         };

//         fetch('/api/announcements', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(announcementData)
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Ошибка добавления объявления');
//             }
//             addAnnouncementForm.reset();
//             fetchAnnouncements();
//         })
//         .catch(error => console.error('Ошибка при добавлении объявления:', error));
//     });

//     deleteAnnouncementForm.addEventListener('submit', event => {
//         event.preventDefault();
//         const formData = new FormData(deleteAnnouncementForm);
//         const announcementId = formData.get('id');

//         fetch(`/api/announcements/${announcementId}`, {
//             method: 'DELETE'
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Ошибка удаления объявления');
//             }
//             deleteAnnouncementForm.reset();
//             fetchAnnouncements();
//         })
//         .catch(error => console.error('Ошибка при удалении объявления:', error));
//     });

//     window.addEventListener('DOMContentLoaded', fetchAnnouncements);
// }

//карусель
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    let currentIndex = 0;

    function showSlide(index) {
        const slides = carousel.querySelectorAll('.slide');
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Показываем первый слайд при загрузке страницы
    showSlide(currentIndex);
});


document.getElementById('showCCarouselButton').addEventListener('click', function() {
    document.getElementById('ccarousel').style.display = 'block';
});

document.getElementById('closeCCarouselButton').addEventListener('click', function() {
    document.getElementById('ccarousel').style.display = 'none';
});



// Функция для добавления нового пользователя
// function addUser(event) {
//     event.preventDefault();
//     const formData = new FormData(addUserForm);
//     const userData = {
//         name: formData.get('name'),
//         email: formData.get('email'),
//         password: formData.get('password')
//     };

//     fetch('/api/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userData)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Ошибка добавления пользователя');
//         }
//         addUserForm.reset();
//         fetchUsers(); // Обновляем список пользователей после добавления нового пользователя
//     })
//     .catch(error => console.error('Ошибка при добавлении пользователя:', error));
// }

// const addUserForm = document.getElementById('addUserForm');
// addUserForm.addEventListener('submit', addUser);



// Получение данных из формы
// var username = document.getElementById("username").value;
// var email = document.getElementById("email").value;
// var password = document.getElementById("password").value;

// // Создание объекта XMLHttpRequest
// var xhr = new XMLHttpRequest();

// // Настройка запроса
// xhr.open("POST", "bbb.php", true);
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// // Обработчик события изменения состояния запроса
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         // Здесь можно добавить обработку ответа от сервера
//         alert(xhr.responseText);
//     }
// };

// // Отправка данных на сервер
// xhr.send("username=" + encodeURIComponent(username) + "&email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password));


// Отправка данных из формы новости
document.getElementById('addNewsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное действие отправки формы, чтобы страница не перезагружалась
    
    // Получаем данные из формы
    const formData = new FormData(this);

    // Отправляем данные на сервер с помощью AJAX
    fetch('add_news.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка ' + response.status);
        }
        return response.json(); // Возвращаем ответ сервера в виде JSON
    })
    .then(data => {
        console.log(data); // Выводим ответ сервера в консоль (можно удалить)
        // Обновляем список новостей
        updateNewsList();
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});

// Функция для обновления списка новостей
function updateNewsList() {
    fetch('get_news.php') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка ' + response.status);
        }
        return response.json(); 
    })
    .then(news => {
        const newsList = document.getElementById('newsList');
        newsList.innerHTML = '';

        // Добавляем новые новости в список
        news.forEach(newsItem => {
            const newsItemElement = document.createElement('div');
            newsItemElement.textContent = newsItem.title; 
            newsList.appendChild(newsItemElement);
        });
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}






document.getElementById('addAnnouncementForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('Announcement.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка ' + response.status);
        }
        return response.text(); // При необходимости обрабатываем текстовый ответ
    })
    .then(data => {
        console.log(data); // При необходимости обрабатываем ответ
        updateAnnouncementsList();
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});

function updateAnnouncementsList() {
    fetch('Announcement.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка ' + response.status);
        }
        return response.text(); // При необходимости обрабатываем текстовый ответ
    })
    .then(html => {
        const announcementsList = document.getElementById('announcementsList');
        announcementsList.innerHTML = html;
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}

//открытие окна после нажатия на кнопку
function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
