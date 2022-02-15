const ajaxman = (data , callback)=>{
    if (!data.url && data.method){
        throw new Error("data parameter should have url and type option")
    }
    let xhr = new XMLHttpRequest();
    xhr.open(data.method, data.url);
    xhr.onload = ()=>{
        callback(xhr)
    }
    xhr.send();
}
export default ajaxman;
