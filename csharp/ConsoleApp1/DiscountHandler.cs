namespace ConsoleApp1
{
    public abstract class DiscountHandler
    {
        protected DiscountHandler nextHandler;

        public void SetNextHandler(DiscountHandler nextHandler)
        {
            this.nextHandler = nextHandler;
        }

        public abstract decimal CalculateDiscount(Customer customer, decimal orderTotal);
    }
}
