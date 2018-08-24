const fs = require('fs');
const fsPromises = fs.promises;

function tree(stringDir) {
	if(!stringDir || typeof stringDir != 'string'){
		throw 'ожидается string, передано ' +  typeof stringDir;
    }
    
    async function getPromiceReaddir(dir){
        return fsPromises.readdir(dir);
    }
    async function getPromiseStat(path){
        return fsPromises.stat(path);
    }

    function getPromiseStatAll(path, pathsContent){
        return new Promise(function(resolve, reject) {
            let pathsContentsCount = pathsContent.length;
            let files = [], dirs = [];
            for (let key in pathsContent) {
                let newPath = `${path}/${pathsContent[key]}`;
                getPromiseStat(newPath)
                .then((stat)=>{
                    pathsContentsCount--;
                    if(stat.isDirectory()){
                        dirs.push(newPath);
                    } else {
                        files.push(newPath);
                    }
                    if(!pathsContentsCount){
                        resolve({files: files, dirs: dirs});
                    }
                })
            }
        })

    }

    let mainPromise = new Promise(function(resolve, reject) {
        this.promisesCount = 1;
        this.filesAndDirs = {
			files: [],
			dirs: []
        };
        
        (function loop(stringDir){
            Promise.resolve(stringDir)
            .then(getPromiceReaddir)
            .then(files => getPromiseStatAll(stringDir, files) )
            .then(obj => {
                promisesCount--;
                filesAndDirs = {
                    dirs: [...filesAndDirs.dirs, ...obj.dirs],
                    files: [...filesAndDirs.files, ...obj.files]
                }
                if(obj.dirs.length){
                    for(let key in obj.dirs){
                        promisesCount++;
                        loop(obj.dirs[key]);
                    }
                }
                if(!promisesCount){
                    resolve(filesAndDirs);
                }

            })
            .catch(console.log)
        })(stringDir)

    })

	return mainPromise
}

tree(process.argv[2])
    .then(console.log)