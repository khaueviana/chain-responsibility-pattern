namespace ConsoleApp1
{
    public class VIPDiscountHandler : DiscountHandler
    {
        public override decimal CalculateDiscount(Customer customer, decimal orderTotal)
        {
            if (customer.IsVIP)
            {
                return orderTotal * 0.8m; // 20% discount
            }

            return this.nextHandler?.CalculateDiscount(customer, orderTotal) ?? orderTotal;
        }
    }
}
