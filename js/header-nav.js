(function () {
  var headerButtonElement = document.querySelector('.js-header-nav-btn');
  var headerNavElement = document.querySelector('.js-header-nav');
  var bodyElement = document.querySelector('body');

  headerButtonElement.addEventListener('click', function () {
    bodyElement.classList.toggle('modal-open');
    headerNavElement.classList.toggle('header__nav--show');
  })
})();