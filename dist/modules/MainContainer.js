'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MainContainer {
    constructor() {
        this.link = (0, _jquery2.default)('.third a');
        this.arrow = (0, _jquery2.default)('.third a .fa');
        this.bounceArrow();
    }

    bounceArrow() {
        this.arrow.hover(function () {
            (0, _jquery2.default)(this).animate({
                top: '-10px',
                opacity: 0.5
            }, 500, function () {
                (0, _jquery2.default)(this).animate({
                    top: '0',
                    opacity: 1
                }, 500);
            });
        });
    }
}

exports.default = MainContainer;
//# sourceMappingURL=MainContainer.js.map