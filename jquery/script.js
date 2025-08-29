$(document).ready(function() {

    $("#miFormulario").css({
        "background-color": "#f8f9fa",  
        "border-color": "#007bff"       
    });
    $("button").css("border-radius", "5px"); 
   
    $("#miFormulario").hide().fadeIn(1500);  

 
    $("button").hover(
        function() {
            $(this).animate({
                width: "105%", 
                backgroundColor: "#0056b3"  
            }, 300); 
        },
        function() {
            $(this).animate({
                width: "100%",  
                backgroundColor: "#007bff"  
            }, 300);
        }
    );

    $("input[type='radio'], input[type='checkbox']").parent().hide().slideDown(1000);

    $("input, select, textarea").focus(function() {
        $(this).animate({
            borderColor: "#28a745", 
            boxShadow: "0 0 5px #28a745"
        }, 200);
    }).blur(function() {
        $(this).animate({
            borderColor: "#ccc",  
            boxShadow: "none"
        }, 200);
    });

    $("#miFormulario").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            contrasena: {
                required: true,
                minlength: 6
            },
            edad: {
                required: true,
                number: true,
                min: 18
            },
            fecha_nacimiento: {
                required: true,
                date: true
            },
            genero: {
                required: true
            },
            pais: {
                required: true
            },
            comentarios: {
                maxlength: 500
            }
        },
        messages: {
            nombre: {
                required: "El nombre es obligatorio.",
                minlength: "El nombre debe tener al menos 3 caracteres."
            },
            email: {
                required: "El email es obligatorio.",
                email: "Por favor, ingresa un email válido."
            },
            contrasena: {
                required: "La contraseña es obligatoria.",
                minlength: "La contraseña debe tener al menos 6 caracteres."
            },
            edad: {
                required: "La edad es obligatoria.",
                number: "Debe ser un número válido.",
                min: "Debes tener al menos 18 años."
            },
            fecha_nacimiento: {
                required: "La fecha de nacimiento es obligatoria.",
                date: "Ingresa una fecha válida."
            },
            genero: "Selecciona un género.",
            pais: "Selecciona un país."
        },
        errorPlacement: function(error, element) {
            if (element.is(":radio") || element.is(":checkbox")) {
                error.appendTo(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function(form) {

            var formData = $(form).serializeArray();
            console.log("Datos del formulario (usando .serializeArray()):", formData);  


            $("#successMessage").fadeIn(500).delay(3000).fadeOut(500);
           
        }
    });
});