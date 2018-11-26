/**
 * add class to DOM-element
 * @param {external:Node} el 
 * @param {String} className 
 */
function addClass(el, className){
    if (el.classList) {
        el.classList.add(className);
    }
    else {
        el.className += ' ' + className;
    }
}

/**
 * remove class from DOM-element
 * @param {external:Node} el 
 * @param {String} className 
 */
function removeClass(el, className) {
    if (el.classList){
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
        
}

/**
 * add new rss channel into mongodb
 * @param {String} title 
 * @param {String} link 
 * @returns {Promise<object>}
 */
function saveRssLink(title, link){
    return new Promise((resolve, reject) => {
        title = title.trim();
        link = link.trim();
    
        if (typeof title !== 'string' || title.length === 0
        || typeof link !== 'string'  || link.length === 0) {
            throw new Error('Parameters are expected type String'); 
        }
    
        let sendObject = {title: title,  link: link};
        let options = {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(sendObject)
        }
    
        fetch('/channel/save', options)
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            
            let rsslink__output = document.querySelector('.rsslink__output-status');
            let rsslink__list = document.querySelector('.rsslink__list');
            if (res.error) {
                rsslink__output.innerHTML = 'incorrect data';
                addClass(rsslink__output, 'error');
                return false;
            }
            resolve(res);
        })
        .catch( console.error );
    })
}

/**
 * get all rss channels from db
 * @returns {Promise<object>}
 */
function getRssChannels() {
    return new Promise((resolve, reject) => {
        fetch('/channels')
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            if (res.error) {
                let textError = "There's error in /getallrss server`s response";
                reject(textError);
                throw new Error(textError);
            }
            resolve(res);
        })
        .catch( console.error );
    })
}

function getRssArticlesByChannels(id) {
    return new Promise((resolve, reject) => {

        if (typeof id !== 'string' || id.length === 0) {
            throw new Error('Parameters are expected type String'); 
        }

        let options = {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "GET"
        }

        fetch('/channel/' + id + '/articles', options)
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            if (res.error || !res || !Object.keys(res).length) {
                let textError = "There's error in /getallrss server`s response";
                reject(textError);
            }
            resolve(res);
        })
        .catch( console.error );
    })
}
