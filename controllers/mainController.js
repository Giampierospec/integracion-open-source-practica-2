const path = require('path');
let MainCtrl = (()=>{
    let index = (req,res,next)=>{
        return res.render('index', { title: 'Create JSON' });
    };
    let readFile = (req,res,next)=> res.render('readFile',{title:'Read JSON'});
    let renderDownloadFile = (req,res,next)=> res.sendFile(path.resolve(__maindir,`uploads/${req.query.ar}`));
    return {
        index,
        renderDownloadFile,
        readFile
    };
})();

module.exports = {MainCtrl};