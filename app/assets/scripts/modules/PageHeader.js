import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class PageHeader {
    constructor() {
        this.sidebarMenu = $('.site-header__sidebar-menu');
        this.openMenuBtn = $('.site-header__toggle-menu');
        this.closeMenuBtn = $('.fa-times');
        this.body = $('body');
        this.headerLinks = $(".navigation-selection .navigation-item a");
        this.headerLinksSecond = $('.infos-container-inner--vertical-line a');
        this.openMenu();
        this.closeMenu();
        this.addSmoothScrolling();
        this.closeMenuAfterClickLinks();
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
        this.headerLinksSecond.smoothScroll();
    }

    openMenu() {
        var that = this;
        this.openMenuBtn.click(function () {
            that.sidebarMenu.removeClass('hide-menu');
            that.openMenuBtn.addClass('opacity-zero');
            that.body.css('overflow', 'hidden');
        });
    }

    closeMenu() {
        var that = this;
        this.closeMenuBtn.click(function () {
            that.sidebarMenu.addClass('hide-menu');
            that.openMenuBtn.removeClass('opacity-zero');
            that.body.css('overflow', 'visible');
        });
    }

    closeMenuAfterClickLinks() {
        var that = this;
        this.headerLinks.click(function () {
            that.sidebarMenu.addClass('hide-menu');
            that.openMenuBtn.removeClass('opacity-zero');
            that.body.css('overflow', 'visible');
        });
    }

}

export default PageHeader;