var images = [
    'img/alba-maquillaje_137_20pct.jpg',
    'img/Azu_hilo_2.jpg',
    'img/2024-10-beauty-party-1920x1440.jpeg',
    'img/slide-show/Irene_pincel_oscura.JPG'
];

var slider = setInterval(function () {
    document.getElementsByClassName('hero')[0].setAttribute('style', 'background-image: url("' + images[0] + '")');
    images.splice(images.length, 0, images[0]);
    images.splice(0, 1);
}, 8000);



