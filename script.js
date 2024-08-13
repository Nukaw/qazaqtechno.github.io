// Функция для скрытия/отображения секций
function toggleSections(sectionId) {
    const section = document.getElementById(sectionId);
    
    // Проверяем, скрыта ли секция
    if (section.classList.contains('hidden')) {
        // Если скрыта, показываем её
        section.classList.remove('hidden');
    } else {
        // Если уже показана, скрываем
        section.classList.add('hidden');
    }
}