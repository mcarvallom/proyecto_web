
$("#boton1").click(function(){
    var nombre = $("#validationCustom01").val();
    var correo = $("#validationCustom02").val();
    var dominio = $("#validationCustomUsername").val();
    var mensaje =$("#validationCustom03").val();

    if (nombre === "" || correo === "" || dominio === "" || mensaje === ""){
        alert("Todos los campos son obligatorios");
    }




})
