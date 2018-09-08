const { promises: { readdir, stat } } = require('fs')
const path = require('path');

function tree(stringDir) {
    if (!stringDir || typeof stringDir != 'string') {
        throw new Error('ожидается string, передано ' + typeof stringDir)
    }

    function statAll(pathFrom, pathsContent) {
        return new Promise(function (resolve, reject) {
            let pathsContentsCount = pathsContent.length
            let files = []
            let dirs = []
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

    let mainPromise = new Promise(function (resolve, reject) {

        let promisesCount = 1,
            filesAndDirs = {
            files: [],
            dirs: []
        };

        (function loop(stringDir) {
            Promise.resolve(stringDir)
                .then(readdir)
                .then(files => statAll(stringDir, files))
                .then(obj => {
                    promisesCount--;
                    filesAndDirs = {
                        dirs: [...filesAndDirs.dirs, ...obj.dirs],
                        files: [...filesAndDirs.files, ...obj.files]
                    }
                    if (obj.dirs.length) {
                        for (let key in obj.dirs) {
                            promisesCount++
                            loop(obj.dirs[key])
                        }
                    }
                    if (!promisesCount) {
                        resolve(filesAndDirs)
                    }

                })
                .catch(console.log)
        })(stringDir)

    })

    return mainPromise
}

tree(process.argv[2])
    .then(console.log)