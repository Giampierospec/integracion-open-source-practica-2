(() => {
    new Vue({
        el: "#app",
        data:{
            obj:""
        },
        methods:{
            sendFile(){
                let file = document.querySelector("#fl").files[0];
                let formdata = new FormData();
                formdata.append("flJson",file);
                axios.post('/api/readJson',formdata,{
                    headers:{
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((obj)=>{
                    this.obj = obj.data;
                    console.log(obj);
                }).catch((e)=> {
                    swal({
                        title:"Ocurrió un Error",
                        text:e.response.data,
                        icon:"error"
                    });
                });
            }
        }
    });
})();