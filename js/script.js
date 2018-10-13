'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function () {

    var offset = Math.floor(window.innerHeight / 4);

    var preloadElt = document.querySelector('.preload');
    var loaderElt = document.querySelector('.loader');

    if (preloadElt) {
        document.body.classList.add('locked');

        var promiseTO = new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, 2000);
        });

        Promise.all([promiseTO].concat(_toConsumableArray(preloadImages()))).then(function () {
            window.scrollTo(0, 0);
            preloadElt.classList.remove('hidden');
            loaderElt.classList.add('hidden');

            setTimeout(function () {
                document.body.classList.remove('locked');
                loaderElt.parentElement.removeChild(loaderElt);
            }, 1500);

            new WOW({
                offset: offset,
                mobile: false
            }).init();
        });
    } else {
        document.body.classList.remove('locked');
        loaderElt.parentElement.removeChild(loaderElt);
    }
})();

function preloadImages() {
    var images = document.querySelectorAll('img');
    var promises = [].concat(_toConsumableArray(images)).filter(function (image) {
        return !image.classList.contains('loader__cover');
    }).map(function (image) {
        return new Promise(function (resolve) {
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
