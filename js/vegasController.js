$("body").vegas({
    preload: false,
    timer: false,
    transitionDuration: 1000,
    delay: 5000,
    slides: [
        { src: 'img/background-01.jpg', valign: 'top' },
        { src: 'img/background-02.jpg', valign: 'top' },
        { src: 'img/background-03.jpg', valign: 'top' },
        { src: 'img/background-04.jpg', valign: 'top' }
     ],
    transition: 'swirlRight2',
    animation: 'random'
});

setInterval("contentFadeOut()",5100);

