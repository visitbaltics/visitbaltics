var scalable = document.querySelector('.intro__scalable');

window.addEventListener('scroll', function(evt) {
    scalable.classList.add('intro__scalable_fix');
});
