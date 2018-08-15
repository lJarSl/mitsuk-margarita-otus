const fs = require('fs');
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// текущий каталог
//console.log(process.cwd());

// переданный параметр
//console.log(process.argv[2]);





function tree(stringDir) {
	if(!stringDir || typeof stringDir != 'string'){
		throw 'значения переданы в неправильном формате' 
	}

	return new Promise(function(resolve, reject) {

		this.filesAndDirs = {
			files: [],
			dirs: []
		};

		function loop(stringDir){

			return new Promise(function(resolve, reject) {

				fs.readdir(stringDir, (err, files) => {
					if (err) throw err;

					var counter = files.length;

				  	for (var key in files) {

				  		let path = `${stringDir}/` + files[key];
				  		
				  		fs.stat(path, (err, stats) => {
				  			
				  			if(stats.isDirectory()){
				  				this.filesAndDirs.dirs.push(path);
				  				loop(path).then(()=>{
				  					counter--;
				  					if(!counter){
					  					resolve(filesAndDirs);
				  					}
				  				})
				  			} else {
				  				this.filesAndDirs.files.push(path);
				  				counter--
				  				if(!counter){
				  					resolve(filesAndDirs);
				  				}
				  			}

				  		})
					}

					
				})
			})

		}

	
 		loop(stringDir).then((x)=>{
 			resolve(x)
 		});
	})

}

tree(process.argv[2])
	.then(console.log)