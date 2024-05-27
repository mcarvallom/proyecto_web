$(document).ready(function(){

    $("#boton1").click(function(){
        var nombre = $("#nombren").val();
        var correo = $("#correon").val();
        var dominio = $("#dominion").val();
        var mensaje = $("#mensajen").val();

        console.log(nombre)

        if(nombre === "" || correo === "" || dominio === ""|| mensaje === ""){
            alert("Todos los campos son obligatorios.");
        }
        else {
            alert("Mensaje enviado con éxito.")
        }

    });

    // Código de cambiar botón de agregar a agregado //

    const open1 = document.getElementById('open-popup1');
    const modal1 = document.getElementById('modal_container1');
    const cerrar1 = document.getElementById('closemodal1');
    
    open1.addEventListener('click', () => {
        modal1.classList.add('show');
    });

    cerrar1.addEventListener('click', ()=> {
        modal1.classList.remove('show');
    });

    const open2 = document.getElementById('open-popup2');
    const modal2 = document.getElementById('modal_container2');
    const cerrar2 = document.getElementById('closemodal2');
    
    open2.addEventListener('click', () => {
        modal2.classList.add('show');
    });

    cerrar2.addEventListener('click', ()=> {
        modal2.classList.remove('show');
    });

    const open3 = document.getElementById('open-popup3');
    const modal3 = document.getElementById('modal_container3');
    const cerrar3 = document.getElementById('closemodal3');
    
    open3.addEventListener('click', () => {
        modal3.classList.add('show');
    });

    cerrar3.addEventListener('click', ()=> {
        modal3.classList.remove('show');
    });

    const open4 = document.getElementById('open-popup4');
    const modal4 = document.getElementById('modal_container4');
    const cerrar4 = document.getElementById('closemodal4');
    
    open4.addEventListener('click', () => {
        modal4.classList.add('show');
    });

    cerrar4.addEventListener('click', ()=> {
        modal4.classList.remove('show');
    });

    const open5 = document.getElementById('open-popup5');
    const modal5 = document.getElementById('modal_container5');
    const cerrar5 = document.getElementById('closemodal5');
    
    open5.addEventListener('click', () => {
        modal5.classList.add('show');
    });

    cerrar5.addEventListener('click', ()=> {
        modal5.classList.remove('show');
    });

    const open6 = document.getElementById('open-popup6');
    const modal6 = document.getElementById('modal_container6');
    const cerrar6 = document.getElementById('closemodal6');
    
    open6.addEventListener('click', () => {
        modal6.classList.add('show');
    });

    cerrar6.addEventListener('click', ()=> {
        modal6.classList.remove('show');
    });
    const open7 = document.getElementById('open-popup7');
    const modal7 = document.getElementById('modal_container7');
    const cerrar7 = document.getElementById('closemodal7');
    
    open7.addEventListener('click', () => {
        modal7.classList.add('show');
    });

    cerrar7.addEventListener('click', ()=> {
        modal7.classList.remove('show');
    });
    const open8 = document.getElementById('open-popup8');
    const modal8 = document.getElementById('modal_container8');
    const cerrar8 = document.getElementById('closemodal8');
    
    open8.addEventListener('click', () => {
        modal8.classList.add('show');
    });

    cerrar8.addEventListener('click', ()=> {
        modal8.classList.remove('show');
    });

    const open9 = document.getElementById('open-popup9');
    const modal9 = document.getElementById('modal_container9');
    const cerrar9 = document.getElementById('closemodal9');
    
    open9.addEventListener('click', () => {
        modal9.classList.add('show');
    });

    cerrar9.addEventListener('click', ()=> {
        modal9.classList.remove('show');
    });

})

function AgregarArticulo1() {      
    document.getElementById("agregarc1").innerHTML="Agregado";
    document.getElementById("agregarc1").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregarc1").style.color = "white";

}

function AgregarArticulo2() {      
    document.getElementById("agregarc2").innerHTML="Agregado";
    document.getElementById("agregarc2").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregarc2").style.color = "white";

}
function AgregarArticulo3() {      
    document.getElementById("agregarc3").innerHTML="Agregado";
    document.getElementById("agregarc3").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregarc3").style.color = "white";

}

function AgregarArticulo4() {      
    document.getElementById("agregarc4").innerHTML="Agregado";
    document.getElementById("agregarc4").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregarc4").style.color = "white";

}

function AgregarArticulo5() {      
    document.getElementById("agregarc5").innerHTML="Agregado";
    document.getElementById("agregarc5").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregarc5").style.color = "white";

}


function AgregarArticulo6() {      
    document.getElementById("agregarc6").innerHTML="Agregado";
    document.getElementById("agregarc6").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregarc6").style.color = "white";

}

function AgregarArticulo7() {      
    document.getElementById("agregarc7").innerHTML="Agregado";
    document.getElementById("agregarc7").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregarc7").style.color = "white";

}

function AgregarArticulo8() {      
    document.getElementById("agregarc8").innerHTML="Agregado";
    document.getElementById("agregarc8").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregarc8").style.color = "white";

}

function AgregarArticulo9() {      
    document.getElementById("agregarc9").innerHTML="Agregado";
    document.getElementById("agregarc9").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregarc9").style.color = "white";

}

function AgregarArticuloPu1() {      
    document.getElementById("agregapu1").innerHTML="Agregado";
    document.getElementById("agregapu1").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregapu1").style.color = "white";

}

function AgregarArticuloPu2() {      
    document.getElementById("agregapu2").innerHTML="Agregado";
    document.getElementById("agregapu2").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregapu2").style.color = "white";

}

function AgregarArticuloPu3() {      
    document.getElementById("agregapu3").innerHTML="Agregado";
    document.getElementById("agregapu3").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregapu3").style.color = "white";

}
function AgregarArticuloPu4() {      
    document.getElementById("agregapu4").innerHTML="Agregado";
    document.getElementById("agregapu4").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregapu4").style.color = "white";

}
function AgregarArticuloPu5() {      
    document.getElementById("agregapu5").innerHTML="Agregado";
    document.getElementById("agregapu5").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregapu5").style.color = "white";

}
function AgregarArticuloPu6() {      
    document.getElementById("agregapu6").innerHTML="Agregado";
    document.getElementById("agregapu6").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregapu6").style.color = "white";

}
function AgregarArticuloPu7() {      
    document.getElementById("agregapu7").innerHTML="Agregado";
    document.getElementById("agregapu7").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregapu7").style.color = "white";

}
function AgregarArticuloPu8() {      
    document.getElementById("agregapu8").innerHTML="Agregado";
    document.getElementById("agregapu8").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregapu8").style.color = "white";

}
function AgregarArticuloPu9() {      
    document.getElementById("agregapu9").innerHTML="Agregado";
    document.getElementById("agregapu9").style.backgroundColor = "rgba(25,135,84,255)";
    document.getElementById("agregapu9").style.color = "white";

}











/*----------------------------------------*/

var modal = document.getElementById("myModal");

    // Obtén el botón que abre el modal
    var btn = document.getElementById("open-popup1");
    var btn = document.getElementById("open-popup2");
    var btn = document.getElementById("open-popup3");
    var btn = document.getElementById("open-popup4");
    var btn = document.getElementById("open-popup5");
    var btn = document.getElementById("open-popup6");
    var btn = document.getElementById("open-popup7");
    var btn = document.getElementById("open-popup8");
    var btn = document.getElementById("open-popup9");


    // Obtén el elemento <span> que cierra el modal
    var span = document.getElementsByClassName("close")[0];

    // Cuando el usuario hace clic en el botón, abre el modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Cuando el usuario hace clic en <span> (x), cierra el modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cuando el usuario hace clic en cualquier lugar fuera del modal, lo cierra
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }