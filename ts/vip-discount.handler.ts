import { DiscountHandler } from "./calculate-discount";
import { Customer } from "./customer";

export class VIPDiscountHandler extends DiscountHandler {
  calculateDiscount(customer: Customer, orderTotal: number): number {
    if (customer.isVIP) {
      return orderTotal * 0.8; // 20% discount
    }

    return (
      this.nextHandler?.calculateDiscount(customer, orderTotal) ?? orderTotal
    );
  }
}
