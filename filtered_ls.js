var fs = require('fs');
var path = require ('path');
var file = process.argv[2];
var extension = "."+process.argv[3];

fs.readdir(file, function(error, contents) {
	var filteredList = ""
	for (var i=0; i < contents.length; i++) {
		if (path.extname(contents[i]) === extension) {
			filteredList += contents[i] + "\n";		
		}
	}
	console.log(filteredList);
})