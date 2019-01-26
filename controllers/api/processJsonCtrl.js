const {ProcessJsonUtil} = require('../../utils/processJson');
const {ValidationUtil} = require('../../utils/validationUtil');
let ProcessJsonCtrl = (()=>{
    let generateJson = ((req,res,next)=>{
        ValidationUtil.validate(req.body,(e)=>{
            if(e)
                return res.status(400).send(e);
             else{
                 ProcessJsonUtil.genJson(req.body, (err, filename) => {
                     if (err)
                         return res.status(400).send(err);
                     else
                         return res.status(200).send(filename);
                 });
             }
        });
       
    });
    let readJson = (req,res,next)=>{
        ProcessJsonUtil.readJson(req.file.buffer.toString(),(err,obj)=>{
            if(err)
                return res.status(400).send(err);
            else
                return res.status(200).send(obj);
        });
    };
    return {
        generateJson,
        readJson
    };
})();

module.exports = {ProcessJsonCtrl};