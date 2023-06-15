const fs = require('fs')

file = '1-file-cleaner.txt'

fs.readFile(file,'utf8',(err,data) => {
    if (err) {
	console.error(err);
	return;
    }

    //data is cleaned by replaced consecutive whitespaces with single whitespace
    //and stored in variable content
    let content = data.replace(/\s+/g, ' ');

    //content is written back to the text
    fs.writeFile(file,content,'utf8',(err) => {
	if (err) {
	    console.error(err);
	    return;
	}

    });
});

console.log('File cleaned successfully!')
