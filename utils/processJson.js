const fs = require('fs');
const path = require('path');
let ProcessJsonUtil = (()=>{
    /**
     * Genera el json
     * @param {Object} body 
     * @param {(err:string,filename:string)} callback 
     */
    let genJson = (body, callback) => {
        let fileName = `unapec-${new Date().getTime()}.json`;
        fs.writeFile(path.resolve(__maindir,`uploads/${fileName}`),JSON.stringify(body),(err)=>{
            console.log(err);
            if(err)
                callback(err);
            else
                callback(null,fileName);
        });
    };
    return{
        genJson
    };

})();

module.exports = {ProcessJsonUtil};