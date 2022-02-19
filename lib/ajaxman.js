const ajaxman = (options , callback)=>{
    if (!options.url && !options.method){
        throw new Error("options parameter should have url and type option")
    }
    let xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url,(options.async === false)?false:true);
    xhr.onload = ()=>{
        callback(xhr)
    }
    xhr.send();
}
export default ajaxman;
