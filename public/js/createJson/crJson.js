(()=>{
new Vue({
    el:'#app',
    data:{
        credito:{
            tipoRegistro:"",
            universidad: "",
            matricula:"",
            nombre:"",
            carrera:"",
            montoFinanciar:0,
            plazoPago:0,
            cedulaGarante:"",
            sueldoGarante:0
        },
        errors:[]
    },
    methods:{
        sendToApi(){
            this.checkObj(this.credito);
            if(this.errors.length){
                swal({
                    title:'Ocurrió un Error',
                    text: this.errors.join('\n'),
                    icon: "error"
                });
            }
            else
                {
                    axios.post('/api/genJson',this.credito)
                         .then((res)=> console.log(res.data))
                         .catch((e)=> console.log(e.response));
                }
        },
        checkObj(obj){
            this.errors = [];
        Object.keys(obj).forEach(k=>{
            if(typeof k === 'object')
                this.checkObj(obj);
            if(!obj[k])
            this.errors.push(`El campo ${k} está vacío`);
        });
        }
        
    }
})
})();