var priceArray= [];
var itemNameArray = [];
// var chickenPrice = document.getElementById("price1");
// console.log(chickenPrice.value);
var prices =[5.99,6.99,9.99];
var names =["Chicken","Catfish","Steak"];
function addItem (){
	 itemNameArray.push("Chicken");
	 priceArray.push(prices[0]);

	console.log(priceArray);
}
function addItem1 (){
	 itemNameArray.push(names[1]);
	 priceArray.push(prices[1]);
	console.log(priceArray);
}
function addItem2 (){
	 itemNameArray.push(names[2]);
	 priceArray.push(prices[2]);
console.log(priceArray);
}

var sum = 0;
// var listItems = document.getElementByTagName('li');
function sumPriceArray() {
   for(var i = 0; i<priceArray.length; i++){
   sum = sum + priceArray[i];   
document.getElementById('total').innerHTML = sum;
}
}