const fs = require('fs');

const content = 'This is a test file\nHello JavaScript!\n'

fs.writeFile('4-write-to-file.txt',content,'utf8', (err)=>{
    if (err) {
	console.error(err);
	return;
    }

    console.log('File has been written successfully!');
});
