const fs = require('fs');
const path = require('path');
let props = ["tipoRegistro","universidad","matricula",
        "nombre","carrera","montoFinanciar","plazoPago","cedulaGarante","sueldoGarante"]
let ProcessJsonUtil = (()=>{
    /**
     * Genera el json
     * @param {Object} body 
     * @param {(err:string,filename:string)} callback 
     */
    let genJson = (body, callback) => {
        body.universidad = "Universidad Apec";
        Object.keys(body).forEach((k)=>{
            if(typeof body[k] === "string")
                body[k] = body[k].toUpperCase();
        });
        let fileName = `unapec-${new Date().getTime()}.json`;
        fs.writeFile(path.resolve(__maindir,`uploads/${fileName}`),JSON.stringify(body),(err)=>{
            console.log(err);
            if(err)
                callback(err);
            else
                callback(null,fileName);
        });
    };
    /**
     * Reads the json and returns an object
     * @param {object} body 
     * @param {(err:string,obj:Object)=>()} callback 
     */
    let readJson = (body,callback)=>{
        let obj = JSON.parse(body);
        let keys = Object.keys(obj);
        let pr = props.filter((x)=> keys.indexOf(x) === -1);
        if(pr.length)
            callback(`Las siguientes propiedades no están presentes en el objeto: ${pr.join('\n')}`);
        else 
            callback(null,obj);
    };
    return{
        genJson,
        readJson
    };

})();

module.exports = {ProcessJsonUtil};