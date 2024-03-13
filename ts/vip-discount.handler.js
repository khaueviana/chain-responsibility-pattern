"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VIPDiscountHandler = void 0;
var calculate_discount_1 = require("./calculate-discount");
var VIPDiscountHandler = /** @class */ (function (_super) {
    __extends(VIPDiscountHandler, _super);
    function VIPDiscountHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VIPDiscountHandler.prototype.calculateDiscount = function (customer, orderTotal) {
        var _a, _b;
        if (customer.isVIP) {
            return orderTotal * 0.8; // 20% discount
        }
        return ((_b = (_a = this.nextHandler) === null || _a === void 0 ? void 0 : _a.calculateDiscount(customer, orderTotal)) !== null && _b !== void 0 ? _b : orderTotal);
    };
    return VIPDiscountHandler;
}(calculate_discount_1.DiscountHandler));
exports.VIPDiscountHandler = VIPDiscountHandler;
