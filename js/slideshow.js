var images = [
    'img/alba-maquillaje_137_20pct.webp',
    'img/Azu_hilo_2.webp',
    'img/2024-10-beauty-party-1920x1440.webp',
    'img/slide-show/Irene_pincel_oscura.webp'
];

var slider = null;

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    slider = setInterval(function () {
        document.getElementsByClassName('hero')[0].setAttribute('style', 'background-image: url("' + images[0] + '")');
        images.push(images.shift());
    }, 8000);
}



