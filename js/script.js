var scalableItems = document.querySelectorAll('.js-scalable');

window.addEventListener('scroll', function(evt) {
    scalableItems.forEach(function(item) {
        item.classList.add('js-scalable_fix');
    })
});
