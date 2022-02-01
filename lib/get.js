export const get=(url,callback)=>{
    // make a new XHR request to url
    let xhr = new XMLHttpRequest(); 
    xhr.open('GET', url);
    xhr.onload = () => {
        // callback with the response text
        callback();    
        console.log(xhr.responseText);
    }
    xhr.send();
}