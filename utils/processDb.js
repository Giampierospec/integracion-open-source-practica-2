const {Credito} = require('../models/Credito');

let ProcessDbUtil = (()=>{
    /**
     * Guardar el nuevo objeto
     * @param {Object} body 
     * @param {(err:string,b:Object)=>function} callback 
     */
    let saveObj = (body,callback)=>{
        let credito = new Credito(body);
        credito.save()
        .then((b)=>callback(null,b))
        .catch((e)=> callback(e));
    };
    return {
        saveObj
    };
})();

module.exports = {ProcessDbUtil};