// See https://aka.ms/new-console-template for more information
using ConsoleApp1;

Console.WriteLine("Hello, World!");

var customer = new Customer(true, false);

var vipHandler = new VIPDiscountHandler();

vipHandler.SetNextHandler(new RegularDiscountHandler());

var discountAmount = vipHandler.CalculateDiscount(customer, 10);

Console.WriteLine(discountAmount);
