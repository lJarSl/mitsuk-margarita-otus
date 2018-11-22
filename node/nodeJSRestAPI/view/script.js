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
 */
function saveRssLink(title, link){
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

    fetch('/saverss', options)
    .then(function(response) {
        return response.json();
    })
    .then(function(res) {
        let rsslink__output = document.querySelector('.rsslink__output-status');
        let rsslink__list = document.querySelector('.rsslink__list');
        if (res.error) {
            rsslink__output.innerHTML = res.error;
            addClass(rsslink__output, 'error');

            return false;
        }

        rsslink__output.innerHTML = 'rss chanel was added !';
        rsslink__list.innerHTML += `<div id="rss_cannel_${res.id}" data-id="${res.id}">
                                        ${title}: ${link}
                                    </div>`;
        removeClass(rsslink__output, 'error');
    })
    .catch( console.log );

}

function getRssChannels() {
    return new Promise((resolve, reject) => {
        fetch('/getallrss')
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            if (res.error) {
                rsslink__output.innerHTML = res.error;
                addClass(rsslink__output, 'error');
                throw new Error("There's error in /getallrss server`s response");
            }
            resolve(res);
        })
        .catch( console.log );
    })
}