const { promises: { readdir, stat}, writeFileSync } = require('fs')
const path = require('path')

function tree(stringDir) {
    if (!stringDir || typeof stringDir != 'string') {
        throw new Error('ожидается string, передано ' + typeof stringDir)
    }

    function statAll(pathFrom, pathsContent) {
        return new Promise(function (resolve, reject) {
            let pathsContentsCount = pathsContent.length
            let files = []
            let dirs = []

            // empty directory
            if (pathsContent.length === 0) {
                resolve({
                    files: files,
                    dirs: dirs
                })
                return;
            }
            for (let key in pathsContent) {
                const newPath = path.join(pathFrom, pathsContent[key])
                stat(newPath)
                    .then((stat) => {
                        pathsContentsCount--
                        if (stat.isDirectory()) {
                            dirs.push(newPath)
                        } else {
                            files.push(newPath)
                        }
                        if (!pathsContentsCount) {
                            resolve({
                                files: files,
                                dirs: dirs
                            })
                        }
                    })
            }
        })

    }

    /**
     * Promise all
     */
    function promiseAllP(items, block) {
        var promises = [];
        items.forEach((item, index) => {
            promises.push( function(item, i) {
                return new Promise((resolve, reject) => {
                    resolve(block.apply(this, [item, index, resolve, reject]));
                });
            }(item, index))
        });
        return Promise.all(promises);
    }

    let mainPromise = new Promise((resolve, reject) => {
        let promisesCount = 1,
            filesAndDirs = {
            files: [],
            dirs: []
        };
        (function loop(stringDir) {
            let dirsCount = 0
            Promise.resolve(stringDir)
            .then(readdir)
            .then(files => statAll(stringDir, files))
            .then(obj => {
                filesAndDirs = {
                    dirs: [...filesAndDirs.dirs, ...obj.dirs],
                    files: [...filesAndDirs.files, ...obj.files]
                }
                promisesCount--
                dirsCount = obj.dirs.length
                promisesCount += dirsCount
                return promiseAllP(obj.dirs, loop)
            })
            .then((obj) => {
                if(promisesCount === 0){
                    resolve(filesAndDirs)
                }
            })
            .catch(console.log)
        })(stringDir)
    })
    return mainPromise
}

tree(process.argv[2])
    .then(data => {
        console.log(data)
        writeFileSync('./result.txt', JSON.stringify(data))
    })