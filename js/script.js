(function () {

    const offset = Math.floor(window.innerHeight / 4);

    const preloadElt = document.querySelector('.preload');
    const loaderElt = document.querySelector('.loader');

    if (preloadElt) {
        document.body.classList.add('locked');

        const promiseTO = new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 2000);
        });

        Promise.all([
            promiseTO,
            ...preloadImages()
        ])
            .then(() => {
                window.scrollTo(0, 0);
                preloadElt.classList.remove('hidden');
                loaderElt.classList.add('hidden');

                setTimeout(() => {
                    document.body.classList.remove('locked');
                    loaderElt.parentElement.removeChild(loaderElt);
                }, 1500);

                new WOW({
                    offset: offset
                }).init();
            });
    } else {
        loaderElt.classList.add('hidden');
    }
})();

function preloadImages() {
    const images = document.querySelectorAll('img');
    const promises = [...images]
        .filter(image => !image.classList.contains('loader__cover'))
        .map((image) => {
            return new Promise((resolve) => {
                image.onload = function () {
                    resolve();
                };

                image.onerror = function () {
                    resolve();
                };

                image.src = image.src;
            });

            return Promise.all(promises);
        });

    return promises;
}
