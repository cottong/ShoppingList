var priceArray= [];
var itemNameArray = [];
var prices =[5.99,6.99,9.99, 2.99,1.50, 3.99,2.99, 2.50, 2.99];
var names =["Chicken","Catfish","Steak",
"Mashed Potatoes","Rice","Mac & Cheese ",
"Greens ","Salad","Green Beans"];

function addItem (){
	 itemNameArray.push(names[0]);
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
function addItem3 (){
	 itemNameArray.push(names[3]);
	 priceArray.push(prices[3]);
console.log(priceArray);

}
function addItem4 (){
	 itemNameArray.push(names[4]);
	 priceArray.push(prices[4]);
console.log(priceArray);

}
function addItem5 (){
	 itemNameArray.push(names[5]);
	 priceArray.push(prices[5]);
console.log(priceArray);

}
function addItem6 (){
	 itemNameArray.push(names[6]);
	 priceArray.push(prices[6]);
console.log(priceArray);

}
function addItem7 (){
	 itemNameArray.push(names[7]);
	 priceArray.push(prices[7]);
console.log(priceArray);

}
function addItem8 (){
	 itemNameArray.push(names[8]);
	 priceArray.push(prices[8]);
console.log(priceArray);

}
var sum = 0;
function sumPriceArray() {
   for(var i = 0; i<priceArray.length; i++){
   sum = sum + priceArray[i];   
document.getElementById('total').innerHTML = sum;
document.getElementById('items').innerHTML = itemNameArray;

}
}