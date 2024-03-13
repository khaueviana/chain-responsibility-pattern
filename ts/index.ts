import { Customer } from "./customer";
import { RegularDiscountHandler } from "./regular-discount.handler";
import { VIPDiscountHandler } from "./vip-discount.handler";

const customer = new Customer(true, false);

var vipHandler = new VIPDiscountHandler();

vipHandler.setNextHandler(new RegularDiscountHandler());

const discountAmount = vipHandler.calculateDiscount(customer, 10);

console.log(discountAmount);
