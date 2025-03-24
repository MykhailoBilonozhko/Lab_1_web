document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('#menu table tbody tr');

    // Спочатку задаємо стилі для кожного рядка за data-priority
    rows.forEach(row => {
        const priority = row.getAttribute('data-priority');

        if (priority === 'low') {
            row.classList.add('low');
        } else if (priority === 'medium') {
            row.classList.add('medium');
        } else if (priority === 'high') {
            row.classList.add('high');
        }
    });

    // Кнопка для підсвічування найпопулярніших страв
    const button = document.getElementById('highlight-button');

    button.addEventListener('click', () => {
        rows.forEach(row => {
            const priority = row.getAttribute('data-priority');

            if (priority === 'high') {
                row.classList.add('highlighted');
            }
        });
    });

    // КРОК 1 + 2: Кнопка для показу/приховування пріоритетного блоку
    const toggleBtn = document.querySelector('.toggle-btn');
    const priorityBlock = document.getElementById('priority-block');

    toggleBtn.addEventListener('click', () => {
    if (priorityBlock.style.display === 'none') {
        priorityBlock.style.display = 'block';
        toggleBtn.textContent = 'Приховати пріоритет';
    } else {
        priorityBlock.style.display = 'none';
        toggleBtn.textContent = 'Показати пріоритет';
    }
    });

    // КРОК 3: Цикл для кнопок меню
    const menuButtons = document.querySelectorAll('.menu-btn');
    const menuContent = document.getElementById('menu-content');

    for (let i = 0; i < menuButtons.length; i++) {
    menuButtons[i].addEventListener('click', () => {
        menuContent.textContent = `Ви натиснули на: Пункт ${i + 1}`;
    });
    }

    // КРОК 4: Ефект наведення (альтернатива через JS)
    toggleBtn.addEventListener('mouseenter', () => {
    toggleBtn.style.backgroundColor = '#444';
    });

    toggleBtn.addEventListener('mouseleave', () => {
    toggleBtn.style.backgroundColor = '#333';
    });

});
