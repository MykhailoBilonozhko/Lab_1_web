document.addEventListener("DOMContentLoaded", function () {
    // --- Завдання 1: Керування DOM ---
    
    let menuItems = document.querySelectorAll("tbody tr");

    menuItems.forEach(row => {
        let priceCell = row.querySelector("td:last-child");
        let price = parseInt(priceCell.textContent); // Отримуємо ціну страви
        
        // Змінюємо фон рядка залежно від ціни
        if (price > 100) {
            row.style.backgroundColor = "#ffdddd"; // Світло-червоний для дорогих страв
        } else {
            row.style.backgroundColor = "#ddffdd"; // Світло-зелений для дешевших страв
        }

        // Змінюємо текст страви, якщо це вареники
        let nameCell = row.querySelector("td:first-child");
        if (nameCell.textContent.includes("Вареники")) {
            nameCell.textContent += "│⭐New⭐│";
        }
    });

    // --- Завдання 2: Обробка подій та динамічні оновлення ---

    // 1. Кнопка для перемикання видимості опису
    let toggleButton = document.getElementById("toggleDescription");
    let description = document.getElementById("description");

    toggleButton.addEventListener("click", function () {
        if (description.style.display === "none") {
            description.style.display = "block";
        } else {
            description.style.display = "none";
        }
    });

    // 3. Ефект наведення на пункти меню
    menuItems.forEach(row => {
        row.addEventListener("mouseenter", function () {
            row.style.backgroundColor = "#f0f0f0"; // Світлий фон при наведенні
        });
        row.addEventListener("mouseleave", function () {
            row.style.backgroundColor = ""; // Повернення до стандартного кольору
        });
    });
});
