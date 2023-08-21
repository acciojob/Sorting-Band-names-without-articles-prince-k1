let arr = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let mp = {};
let arr2 = [];
for(let i = 0; i < arr.length; i++){
	let word = arr[i].split(" ");
	let finalString="";
	for(let i = 0; i < word.length; i++){
		let curr = word[i].toLowerCase();
		if(curr !== "an" && curr !== "a" && curr !== "the"){
			finalString += word[i] + " ";
		}
	}
	let articleless = finalString.trim();
	mp[articleless] = arr[i];
	arr2.push(articleless);
}

arr2.sort();
let ans = [];

for(let i = 0; i < arr2.length; i++){
	arr2[i] = mp[arr2[i]];
	// arr[i] = mp[arr2[i]];
}
console.log(arr2);