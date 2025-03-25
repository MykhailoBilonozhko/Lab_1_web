document.addEventListener("DOMContentLoaded", function () {
    // --- Завдання 1: Динамічне завантаження меню ---
    
    const menuItems = [
        { name: "Борщ український", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8KqhLlNXfUuwt6ZuXLWtDLg458M7cqNSgigy1R8wqv498zXFOJNzGC8v7fEAkFNWnPc&usqp=CAU", price: 120 },
        { name: "Вареники з вишнями", image: "https://menuforyou.com.ua/wp-content/uploads/2024/01/%D0%92%D0%B0%D1%80%D0%B5%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B7-%D0%B2%D0%B8%D1%88%D0%BD%D0%B5%D1%8E.jpg", price: 90 },
        { name: "Деруни", image: "https://ternopil-vichirnij.menu.in.ua/wp-content/uploads/2021/09/219b385bdb4e5c5af7583e6addb25ad5d3defe71-1.jpg", price: 80 }
    ];

    let menuBody = document.getElementById("menuBody");

    if (menuBody) {
        for (let i = 0; i < menuItems.length; i++) {
            let item = menuItems[i];

            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td><img src="${item.image}" alt="${item.name}" width="100"></td>
                <td>${item.price} грн</td>
            `;
            menuBody.appendChild(row);
        }
    }
    
    let menuRows = document.querySelectorAll("tbody tr");

    menuRows.forEach(row => {
        let priceCell = row.querySelector("td:last-child");
        if (!priceCell) return;

        let price = parseInt(priceCell.textContent);

        row.style.backgroundColor = price > 100 ? "#ffdddd" : "#ddffdd";

        let nameCell = row.querySelector("td:first-child");
        if (nameCell && nameCell.textContent.includes("Вареники")) {
            nameCell.textContent += " │⭐New⭐│";
        }
    });

    // --- Завдання 2: Обробка подій ---

    // Кнопка для перемикання опису
    let toggleButton = document.getElementById("toggleDescription");
    let description = document.getElementById("description");

    if (toggleButton && description) {
        toggleButton.addEventListener("click", function () {
            description.style.display = (description.style.display === "none") ? "block" : "none";
        });
    }

    // Ефект наведення на пункти меню
    menuRows.forEach(row => {
        row.addEventListener("mouseenter", function () {
            row.style.backgroundColor = "#f0f0f0";
        });
        row.addEventListener("mouseleave", function () {
            row.style.backgroundColor = "";
        });
    });

    // --- Завдання 3: Додавання коментарів ---
    
    let commentForm = document.getElementById("commentForm");
    let nameInput = document.getElementById("name");
    let commentInput = document.getElementById("comment");
    let commentList = document.getElementById("commentList");

    if (commentForm && nameInput && commentInput && commentList) {
        commentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let userName = nameInput.value.trim();
            let commentText = commentInput.value.trim();

            if (userName === "" || commentText === "") {
                alert("Будь ласка, введіть ім'я та коментар!");
                return;
            }

            let newComment = document.createElement("li");
            newComment.innerHTML = `<strong>${userName}:</strong> ${commentText}`;

            commentList.appendChild(newComment);

            nameInput.value = "";
            commentInput.value = "";
        });
    }
});
