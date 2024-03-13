namespace ConsoleApp1
{
    public class RegularDiscountHandler : DiscountHandler
    {
        public override decimal CalculateDiscount(Customer customer, decimal orderTotal)
        {
            if (customer.IsRegular)
            {
                return orderTotal * 0.9m; // 10% discount
            }

            return this.nextHandler?.CalculateDiscount(customer, orderTotal) ?? orderTotal;
        }
    }
}
