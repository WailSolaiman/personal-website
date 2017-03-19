import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class PageFooter {

    constructor() {
        this.footerLinks = $('.footer-ul li a');
        this.footerLinksBottom = $('.bottom_ul li a');
        this.addSmoothScrolling();
    }

    addSmoothScrolling() {
        this.footerLinks.smoothScroll();
        this.footerLinksBottom.smoothScroll();
    }
}

export default PageFooter;