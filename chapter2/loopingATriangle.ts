const numberOfLines = 7;

for (let i = 1; i <= numberOfLines; i++){
	let line = '';
	for(let j = 1; j <= i; j++) {
		line += '#';
	}
	console.log(line);
}
