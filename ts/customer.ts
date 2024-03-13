export class Customer {
  readonly isVIP: boolean;
  readonly isRegular: boolean;

  constructor(isVIP: boolean, isRegular: boolean) {
    this.isVIP = isVIP;
    this.isRegular = isRegular;
  }
}
