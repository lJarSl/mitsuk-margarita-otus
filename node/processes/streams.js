/* const http = require('http');

http.createServer((request, response) => {
    
    const {headers, method, url} = request;
    let body = []
    
    request
    .on('data', chunk => {
        body.push(chunk);
        
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();
        
        response.statusCode = 200
        response.setHeader('Content-Type', 'application/json')
        const responseBody = {headers, method, url, body}
        
        response.write(JSON.stringify(responseBody))
        response.end()
    })
    .on('error', (error) => {
        console.log(error)
    })
    
}).listen(8080) */


const stream = require('stream');

// readable stream
/* const readable = (function(){
    const data = [];
    const $ = new stream.Readable({
        objectMode:true,
        read(){}
    })
    $.push({a: 1})

    return $
})()

readable.on('data', (data) => {
    console.log(data);
}) */

// writable stream
/* const writable = (function(){
    const data = []
    const $ = new stream.Writable({
        write(chunk, encoding, callback){
            data.push(chunk.toString())
            callback()
        }
    })
    return $
})()

writable.write('some data')
writable.end('done writing data')

writable.on('finish', () => {
    console.log('All writes are now complete.')
}) */