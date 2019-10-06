(function () {

  var offset = Math.floor(window.innerHeight / 4);

  new WOW({
    offset: offset,
    mobile: false
  }).init();

  var imgSetAttribute = function (link) {
    document
      .createElement('img')
      .setAttribute('src', './img/' + link);
  };

  var uploadAllImages = function () {
    imgSetAttribute('inst_hover.png');
    imgSetAttribute('facebook_hover.png');

    // page index
    imgSetAttribute('intro/main_no-logo.jpg');
    imgSetAttribute('intro/logo.png');
    imgSetAttribute('tallinn/tallinn.jpg');
    imgSetAttribute('tallinn/tallinn_note.png');
    imgSetAttribute('tallinn/tallinn_note.png');
    imgSetAttribute('tallinn/knocker_signature.png');
    imgSetAttribute('tallinn/door.jpg');
    imgSetAttribute('tallinn/lantern.jpg');
    imgSetAttribute('tallinn/townhall.jpg');
    imgSetAttribute('tallinn/bottle.jpg');
    imgSetAttribute('tallinn/ice.jpg');
    imgSetAttribute('tallinn/cola.jpg');
    imgSetAttribute('tallinn/coffee.jpg');
    imgSetAttribute('tallinn/kadriorg.jpg');
    imgSetAttribute('tallinn/flower_bg.jpg');
    imgSetAttribute('tallinn/palace.jpg');
    imgSetAttribute('tallinn/viewpoint.jpg');
    imgSetAttribute('riga/mans.jpg');
    imgSetAttribute('riga/riga_note.png');
    imgSetAttribute('riga/sphinx.jpg');
    imgSetAttribute('riga/blackheads.jpg');
    imgSetAttribute('riga/price.png');
    imgSetAttribute('riga/soup_signature.png');
    imgSetAttribute('riga/peas_signature.png');
    imgSetAttribute('riga/brothers3.jpg');
    imgSetAttribute('riga/number.png');
    imgSetAttribute('riga/balsam.jpg');
    imgSetAttribute('riga/sprats.jpg');
    imgSetAttribute('riga/candies.jpg');
    imgSetAttribute('riga/oldtown.jpg');
    imgSetAttribute('vilnius/vilnius.jpg');
    imgSetAttribute('vilnius/vilnius_note.png');
    imgSetAttribute('vilnius/circle_uzupis.png');
    imgSetAttribute('vilnius/angel.jpg');
    imgSetAttribute('vilnius/teapot1.jpg');
    imgSetAttribute('vilnius/pilies.jpg');
    imgSetAttribute('vilnius/teapot2.jpg');
    imgSetAttribute('vilnius/vilnius_architecture.jpg');
    imgSetAttribute('vilnius/vilnius_view.jpg');
    imgSetAttribute('vilnius/vilnius_view.jpg');
    imgSetAttribute('vilnius/balloon.png');

    // page vilnius
    imgSetAttribute('intro/main_vilnius-no-logo.jpg');
    imgSetAttribute('intro/logo2.png');
    imgSetAttribute('kemeri/bog.jpg');
    imgSetAttribute('kemeri/bird.jpg');
    imgSetAttribute('kolka/kolka.jpg');
    imgSetAttribute('kolka/bird_small.png');
    imgSetAttribute('ventspils/fem_cow.jpg');
    imgSetAttribute('ventspils/pomengrate_cow.jpg');
    imgSetAttribute('seaside/seaside.jpg');
    imgSetAttribute('kuldiga/kuldiga.jpg');
    imgSetAttribute('kuldiga/kuldiga_price.jpg');
    imgSetAttribute('kuldiga/cake.png');
    imgSetAttribute('kuldiga/milk.jpg');
    imgSetAttribute('remains/liepaja.jpg');
    imgSetAttribute('horses/horses.jpg');
    imgSetAttribute('horses/price.jpg');
    imgSetAttribute('horses/bird.jpg');
    imgSetAttribute('horses/cow.png');
    imgSetAttribute('klaipeda/klaipeda.jpg');
    imgSetAttribute('klaipeda/mouse.jpg');
    imgSetAttribute('klaipeda/dragon.jpg');
    imgSetAttribute('klaipeda/sign.png');
    imgSetAttribute('kaunas/kaunas.jpg');
    imgSetAttribute('kaunas/church.jpg');
    imgSetAttribute('trakai/trakai.jpg');

  };


  // TODO: подумать где правильно юзать эту функцию, тк раньше нужно было предзагружать
  uploadAllImages();

})();
