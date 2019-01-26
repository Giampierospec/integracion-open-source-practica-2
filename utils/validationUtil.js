/**
 * Valida la cedula
 * @param {string} cedula 
 */
let validateCedula = (cedula) => {
    let valid;
    let verificador = 0;
    let digito = 0;
    let digitoVerificador = 0;
    let digitoImpar = 0;
    let sumaPar = 0;
    let sumaImpar = 0;
    let longitud = cedula.length;
    if (longitud === 11) {
        digitoVerificador = parseInt(cedula.substr(10, 1));
        for (let i = 9; i >= 0; i--) {
            digito = parseInt(cedula.substr(i, 1));
            if ((i % 2) !== 0) {
                digitoImpar = digito * 2;
                if (digitoImpar >= 10)
                    digitoImpar -= 9;
                sumaImpar += digitoImpar;
            } else
                sumaPar += digito;

        }
    }
    verificador = 10 - ((sumaPar + sumaImpar) % 10);
    if (((verificador == 10)) && (digitoVerificador === 0) ||
        (verificador === digitoVerificador))
        valid = true;
    else
        valid = false;
    return valid;

};
let ValidationUtil = (() => {
    /**
     * Valicaciones
     * @param {Object} x 
     * @param {(err:string)=> function} callback 
     */
    let validate = (x, callback) => {
        let cedulaError = "";
            let isValidCedula = validateCedula(x.cedulaGarante);
            if (!isValidCedula)
                cedulaError = `La cedula del garante ${x.cedulaGarante} no es válida \n`;
        if (cedulaError)
            return callback(cedulaError);
        else
            return callback();
    };
    return {
        validate
    };
})();

module.exports = {
    ValidationUtil
};