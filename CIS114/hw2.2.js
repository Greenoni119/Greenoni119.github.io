function process()
{
var number1, number2, number3, n1, n2, n3, sum, product, average, lowestNum, highestNum;

number1 = document.forms["myform"].elements["num1"].value;
number2 = document.forms["myform"].elements["num2"].value;
number3 = document.forms["myform"].elements["num3"].value;
    n1 = parseInt(number1);
    n2 = parseInt(number2);
    n3 = parseInt(number3);
sum = n1 + n2 + n3;
product = n1 * n2 * n3;
average = (n1 + n2 + n3) / 3;
lowestNum = (n1 <= n2 && n3 || n2 <= n3 && n1 || n3 <= n1 && n2);
highestNum = (n1 >= n2 && n3 || n2 >= n3 && n1 || n3 >= n1 && n2);
document.forms["myform"].elements["result"].value = 
("The inputted numbers were " + n1 + ", " + n2 + ", " + n3 + 
"\nThe sum of the integers is " + sum + 
"\n the product of the integers is " + product + 
"\n the average of the integers is " + average +
"\nthe lowest number is " + lowestNum + 
"\n the highest number is " + highestNum); 
}