
var fs = require('fs');

function getSong(path) {
	return new Promise(function(resolve, reject) {
		fs.readFile(path, {encoding : 'utf8'}, function(err, data) {
			if(err) {
        reject(err);
      }else {
        resolve(data);
      }
		});
	});
}

getSong('./song1.txt')
	.then(function(song1) {
		console.log(song1);
		return getSong('./song2.txt')
	})
	.then(function(song2) {
		console.log(song2);
		return getSong('./song3.txt')
	})
	.then(function(song3) {
		console.log(song3);
	})
	.catch(function(err) {
		console.log(err);
	});