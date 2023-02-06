const date = document.getElementById('currentDate');
date.textContent = new Date().toDateString();

window.onscroll = function() {
    const headerUser = document.querySelector('.user-name');
    const header = document.querySelector('header');
    if (window.pageYOffset > headerUser.offsetTop) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
}