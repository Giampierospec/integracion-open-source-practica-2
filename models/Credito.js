const mongoose = require('mongoose');

let creditoSchema = new mongoose.Schema({
 tipoRegistro:{type:String,maxlength:1},
     universidad: {type:String},
     matricula: {type:Number,maxlength:9},
     nombre: {type:String},
     carrera: {type:String},
     montoFinanciar: {type:Number},
     plazoPago: {type:Number},
     cedulaGarante: {type:String,minlength:11,maxlength:11},
     sueldoGarante: {type:Number}
});

let Credito = mongoose.model('Credito',creditoSchema);

module.exports = {Credito};