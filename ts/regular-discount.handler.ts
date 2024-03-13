import { DiscountHandler } from "./calculate-discount";
import { Customer } from "./customer";

export class RegularDiscountHandler extends DiscountHandler {
  calculateDiscount(customer: Customer, orderTotal: number): number {
    if (customer.isRegular) {
      return orderTotal * 0.9; // 10% discount
    }

    return (
      this.nextHandler?.calculateDiscount(customer, orderTotal) ?? orderTotal
    );
  }
}
