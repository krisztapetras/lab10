function go(){
	/* Maximum number with for loop
	var num=[3,6,9,10,35,60,80];
	var largest= num[0];
	for ( i = 0; i < num.length; i++) {
		if (largest < num[i] ) {
			largest = num[i];
		}
	}
	document.getElementById("main").innerHTML=largest;*/
	
	/*MAximum number with MAth.max */
	let num=[1,2,3,4,5,6];
	let max=Math.max(...num);
	document.getElementById("main").innerHTML=max;
}