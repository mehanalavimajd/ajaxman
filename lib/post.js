export const post=(url,callback)=>{
    // make a new XHR request to url
    let xhr = new XMLHttpRequest(); 
    xhr.open('POST', url);
    xhr.onload = () => {
        // callback with the response text
        callback();    
    }
    xhr.send();
}
