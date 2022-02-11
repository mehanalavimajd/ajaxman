const ajaxman = (data , callback)=>{
    if (!data.url && data.type){
        throw new Error("data parameter should have url and type option")
    }
    let xhr = new XMLHttpRequest();
    xhr.open(data.type, data.url);
    xhr.onload = ()=>{
        callback(xhr)
    }
    xhr.send();
}
export default ajaxman;