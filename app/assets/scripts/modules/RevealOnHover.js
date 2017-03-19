import $ from 'jquery';

class RevealOnHover {
    constructor() {
        this.flexChild = $('.flex-child');
        this.displayInfos();
    }

    displayInfos() {
        var that = this;
        this.flexChild.hover(function () {
            $(this).find('img').siblings().toggleClass('infos--show');
            $(this).find('.infos').css('transition', 'all .3s ease-in-out');
            $(this).find('img').toggleClass('image-decrease-brightniss').css('transition', 'filter .2s ease-in');
        });
    }
}

export default RevealOnHover;