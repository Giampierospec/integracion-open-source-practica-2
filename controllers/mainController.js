
let MainCtrl = (()=>{
    let index = (req,res,next)=>{
        return res.render('index', { title: 'Create JSON' });
    };
    return {
        index
    };
})();

module.exports = {MainCtrl};