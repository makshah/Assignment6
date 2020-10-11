  
var FirstNum = parseInt(window.prompt("Enter the first number"));
var SecondNum = parseInt(window.prompt("Enter the second number"));

if(isNaN(FirstNum) || isNaN(SecondNum)) {
  document.write("Invalid inputs");
}
else if(FirstNum == SecondNum) {
  document.write("Both the numbers are equal");
}
else {
  var largerNumber = FirstNum > SecondNum ? FirstNum : SecondNum;
  document.write("Larger number is " + largerNumber);
}