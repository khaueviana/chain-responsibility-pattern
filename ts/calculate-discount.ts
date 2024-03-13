import { Customer } from "./customer";

export abstract class DiscountHandler {
  protected nextHandler: DiscountHandler | undefined;

  setNextHandler(nextHandler: DiscountHandler) {
    this.nextHandler = nextHandler;
  }

  abstract calculateDiscount(customer: Customer, orderTotal: number): number;
}
