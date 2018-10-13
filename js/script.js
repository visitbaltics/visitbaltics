(function() {

    var offset = Math.floor(window.innerHeight / 4);

    var preloadElt = document.querySelector('.preload');

    if (preloadElt) {
        const promiseTo
        preloadImages()
            .then(() => {
                    preloadElt.classList.remove('hidden');

                    new WOW({
                        offset: offset
                    }).init();
            });
    }
})();

function preloadImages() {
    var images = document.querySelectorAll('img');
    var promises = Array.prototype.map.call(images, function (image) {
        return new Promise(function (resolve) {
            image.onload = function () {
                resolve();
            };

            image.onerror = function name() {
                resolve();
            };

            image.src = image.src;
        })
    });

    return Promise.all(promises);
}
