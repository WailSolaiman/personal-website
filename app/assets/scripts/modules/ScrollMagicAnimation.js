import $ from 'jquery';

class ScrollMagicAnimation {
    constructor() {
        this.controller = new ScrollMagic.Controller();
        this.introAnimation();
        this.blockAnimation();
        this.scrollBarsAnimation();
        this.parallaxAnimation();
    }

    introAnimation() {
        var pinIntroScene = new ScrollMagic.Scene({
                triggerElement: '#intro',
                triggerHook: 0,
                duration: '40%'
            })
            .setPin('#intro', {
                pushFollowers: false
            })
            .addTo(this.controller);
    }

    blockAnimation() {
        if ($(window).width() > 1023) {
            $('.block').addClass('animated fadeOut');

            var blockClass = new ScrollMagic.Scene({
                    triggerElement: '#about-me',
                    duration: '100%',
                    triggerHook: 0.5
                })
                .on('enter', function () {
                    $('.block')
                        .removeClass('animated fadeOut')
                        .addClass('animated fadeIn');
                })
                .on('leave', function () {
                    $('.block')
                        .removeClass('animated fadeIn')
                        .addClass('animated fadeOut');
                })
                // .addIndicators({
                //     name: 'block',
                //     colorTrigger: 'yellow',
                //     colorStart: 'green',
                //     colorEnd: 'red'
                // })
                .addTo(this.controller);
        }
    }

    scrollBarsAnimation() {
        var progressBars = new ScrollMagic.Scene({
                triggerElement: '.progress-bars',
                duration: '60%',
                triggerHook: 0.4
            })
            .on('enter', function () {
                $('.progress-bar').removeClass('empty-bars');
                $('.progress-bar').addClass('active');
                $('.progress-bar p').removeClass('toggle-color');
                $('.progress-bar p').addClass('animated slideInUp');
            })
            .on('leave', function () {
                $('.progress-bar').addClass('empty-bars');
                $('.progress-bar').removeClass('active');
                $('.progress-bar p').removeClass('animated slideInUp');
                $('.progress-bar p')
                    .addClass('toggle-color')
                    .css('transition', 'color 1s ease .2s');
            })
            .addTo(this.controller);
    }

    parallaxAnimation() {
        var parallax = new ScrollMagic.Scene({
                triggerElement: '.parallax',
                duration: '100%',
                triggerHook: 0.1
            })
            .on('enter', function () {
                $('.parallax__header')
                    .css('opacity', '0')
                    .removeClass('animated fadeOutLeftBig')
                    .addClass('animated fadeInLeftBig');
            })
            .on('leave', function () {
                $('.parallax__header')
                    .css('opacity', '1')
                    .removeClass('animated fadeInLeftBig')
                    .addClass('animated fadeOutLeftBig');
            })
            // .addIndicators({
            //     name: 'parallax',
            //     colorTrigger: 'yellow',
            //     // indent: 200,
            //     colorStart: 'green',
            //     colorEnd: 'red'
            // })
            .addTo(this.controller);
    }
}

export default ScrollMagicAnimation;