const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(otherItem => {
      otherItem.classList.remove('active');
    });
    item.classList.add('active');
  });
});
