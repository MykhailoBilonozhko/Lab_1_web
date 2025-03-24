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
});
