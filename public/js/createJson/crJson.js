(()=>{
let valWords = new RegExp("^[a-zA-Z]+$");
new Vue({
    el:'#app',
    data:{
        credito:{
            tipoRegistro:"",
            universidad: "Universidad Apec",
            matricula:"",
            nombre:"",
            carrera:"",
            montoFinanciar:0,
            plazoPago:0,
            cedulaGarante:"",
            sueldoGarante:0
        },
        errors:[],
        validLengths:{
            tipoRegistro: 1,
            cedulaGarante: 11,
            universidad: 16
        }
    },
    methods:{
        sendToApi(){
            this.checkObj(this.credito);
                if(!this.errors.length)
                {
                    axios.post('/api/genJson',this.credito)
                         .then((res)=>{
                             swal({
                                 title:'Procesamiento',
                                 text:'Archivo procesado correctamente',
                                 icon:"success"
                             }).then(()=>{
                                 window.open(`/downloadFile?ar=${res.data}`,"_blank");
                             });
                         })
                         .catch((e)=> this.errors.push(e.response.data));
                }
        },
        restrictLength(e,length){
            if(e.target.value.length === length)
                e.preventDefault();
        },
        checkObj(obj){
            this.errors = [];
        Object.keys(obj).forEach(k=>{
            if(typeof k === 'object')
                this.checkObj(obj);
            else if(!obj[k])
                this.errors.push(`El campo ${k} está vacío`);
            else if(this.validLengths[k] && (obj[k].length !== this.validLengths[k]))
                this.errors.push(`El campo ${k} no tiene la longitud requerida de ${this.validLengths[k]}`);
        });
        }
        
    },
    watch:{
        errors(value){
            if(value.length)
                swal({
                    title: 'Ocurrió un Error',
                    text: this.errors.join('\n'),
                    icon: "error"
                });
        }
    }
})
})();