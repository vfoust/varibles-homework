var inputBill=Number(prompt("what is your bill?"));
var taxAmount=inputBill*.07;
var taxTotalbill=inputBill+taxAmount
var tipAmount=taxTotalbill*.05;
var total= tipAmount+taxTotalbill;
var element= document.body.querySelector(".box");


element.innerHTML=total;