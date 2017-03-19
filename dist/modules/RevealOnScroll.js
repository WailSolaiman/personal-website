'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class RevealOnScroll {
    constructor() {
        this.defineWindowSize();
    }

    defineWindowSize() {
        (0, _jquery2.default)(window).scroll(function () {
            if ((0, _jquery2.default)(window).width() <= 549) {
                if ((0, _jquery2.default)(window).scrollTop() > 600) {
                    this.animatebars();
                }
            } else if ((0, _jquery2.default)(window).width() > 549 && (0, _jquery2.default)(window).width() <= 991) {
                if ((0, _jquery2.default)(window).scrollTop() > 480) {
                    this.animatebars();
                }
            } else {
                if ((0, _jquery2.default)(this).scrollTop() > 1500) {
                    this.animatebars();
                }
            }
        });
    }

    animatebars() {
        (0, _jquery2.default)('.progress .progress-bar').css("width", function () {
            return (0, _jquery2.default)(this).attr("aria-valuenow") + "%";
        });
    }

}

exports.default = RevealOnScroll;
//# sourceMappingURL=RevealOnScroll.js.map