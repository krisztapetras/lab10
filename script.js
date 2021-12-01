let GroceryList=[];
function addGrocery(){
	
	for(i=0;i<5;i++){
		GroceryList[i]=prompt("Please enter an ingredient");
	}
	for(i=0;i<GroceryList.length;i++){
		document.getElementById("main").innerHTML+=(GroceryList[i]+",");
	}
}
function listGrocery(){
	document.getElementById("main").innerHTML=GroceryList.toString();
}
function addToEnd(){
	GroceryList.push(prompt("Enter a grocery"));
	listGrocery();
}
function removeFromEnd(){
	GroceryList.pop();
	listGrocery();
}
function addToStart(){
	GroceryList.unshift(prompt("Enter a grocery"));
	listGrocery();
}
function removeFromStart(){
	GroceryList.shift();
	listGrocery();
}
function addToMidle(){
	GroceryList.splice(3,0,prompt("Enter a grocery"));
	listGrocery();
}