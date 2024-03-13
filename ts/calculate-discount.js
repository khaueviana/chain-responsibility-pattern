"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountHandler = void 0;
var DiscountHandler = /** @class */ (function () {
    function DiscountHandler() {
    }
    DiscountHandler.prototype.setNextHandler = function (nextHandler) {
        this.nextHandler = nextHandler;
    };
    return DiscountHandler;
}());
exports.DiscountHandler = DiscountHandler;
