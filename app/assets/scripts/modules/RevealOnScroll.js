import $ from 'jquery';

class RevealOnScroll {
    constructor() {
        this.defineWindowSize();
    }

    defineWindowSize() {
        var that = this;
        $(window).scroll(function () {
            if ($(window).width() <= 549) {
                if ($(window).scrollTop() > 600) {
                    that.animatebars();
                }
            } else if ($(window).width() > 549 && $(window).width() <= 991) {
                if ($(window).scrollTop() > 480) {
                    that.animatebars();
                }
            } else {
                if ($(this).scrollTop() > 1500) {
                    that.animatebars();
                }
            }
        });
    }

    animatebars() {
        $('.progress .progress-bar').css("width",
            function () {
                return $(this).attr("aria-valuenow") + "%";
            }
        )
    }
}

export default RevealOnScroll;