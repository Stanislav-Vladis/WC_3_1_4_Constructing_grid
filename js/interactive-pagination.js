document.addEventListener('DOMContentLoaded', function() {
  const paginationItems = document.querySelectorAll('.main__pagination-item');

  paginationItems.forEach(function(item) {
    item.addEventListener('click', function(event) {
      // Удаляем класс у предыдущего активного элемента
      const activeItem = document.querySelector('.main__pagination-item--active');
      if (activeItem) {
        activeItem.classList.remove('main__pagination-item--active');
      }
      // Добавляем класс к текущему элементу
      item.classList.add('main__pagination-item--active');
    });
  });
});
