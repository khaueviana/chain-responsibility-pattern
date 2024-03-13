namespace ConsoleApp1
{
    public class Customer(bool isVIP, bool isRegular)
    {
        public bool IsVIP { get; } = isVIP;

        public bool IsRegular { get; } = isRegular;
    }
}
