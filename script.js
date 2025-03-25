document.addEventListener("DOMContentLoaded", function () {
    // --- Завдання 1: Керування DOM ---
    
    let menuItems = document.querySelectorAll("tbody tr");

    menuItems.forEach(row => {
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
    menuItems.forEach(row => {
        row.addEventListener("mouseenter", function () {
            row.style.backgroundColor = "#f0f0f0";
        });
        row.addEventListener("mouseleave", function () {
            row.style.backgroundColor = "";
        });
    });

    // --- Завдання 3: Додавання коментарів ---
    
    let commentForm = document.getElementById("commentForm");
    let commentInput = document.getElementById("comment"); // Переконайся, що ID збігається з HTML
    let commentList = document.getElementById("commentList");

    if (commentForm && commentInput && commentList) {
        commentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let commentText = commentInput.value.trim();

            if (commentText === "") {
                alert("Будь ласка, введіть коментар!");
                return;
            }

            let newComment = document.createElement("li");
            newComment.textContent = commentText;
            newComment.classList.add("comment-item");

            commentList.appendChild(newComment);
            commentInput.value = "";
        });
    }
});
