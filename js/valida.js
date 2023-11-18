

function comenzar(){


$("#form_registro").validate({


    rules:{

        nombre:"required",
        fecha:"date",
        planeta:"required",
        e_mail:{

            required:true,
             email:true


        },
        password:{

            required:true,
            rangelength:[8,16]

        },

        confirma:{

            equalTo:"#passwword"

        },

        

    }, // cierre rules

    messages:{

            nombre:"requerido",
            fecha:"fecha MM/DD/AAAA",
            planeta:"requerido",
            e_mail:{

                required:"requerido",
                email:"escriba bien correo electronico"


            },

            password:{
                  
                required:"requerido",

                rangelength:"de 8 a 16 caracteres"

            },
            
            confirma:"confirma contraseña",
           
    }, //cierre mensajes


    errorPlacement: function(error, element){
        if(element.is(":radio")|| element.is(":checkbox")){

                                                                // elementos de error
            error.appendTo(element.parent());

        }else{

            error.insertAfter(element);

        }

    }


})



}