document.getElementById("btn__registrar").addEventListener("click",registrar);
document.getElementById("btn__buscar").addEventListener("click",buscar__inmueble);
window.addEventListener("resize",anchoPagina)

//Declaracion de variables
var container_formulario=document.querySelector(".container__login");
var formulario_buscar=document.querySelector(".form-buscar");
var formulario_ingresar=document.querySelector(".Registrar__inmueble");

var caja__trasera_login=document.querySelector(".caja__Ingresar-inmueble");
var caja__trasera_ingresar=document.querySelector(".caja__login");

function anchoPagina(){
  if(window.innerWidth>850){
    caja__trasera_login.style.display="block";
    caja__trasera_ingresar.style.display="block";
  }else{
    caja__trasera_ingresar.style="block";
    caja__trasera_ingresar.style.opacity="1"
    caja__trasera_login.style.display="none";
    formulario_buscar.style.display="block";
    formulario_ingresar.style.display="none";
    container_formulario.style.left="0px"
  }
}
anchoPagina();

function registrar(){
  if(window.innerWidth>850){
    formulario_ingresar.style.display="block";
    container_formulario.style.left ="410px";
    formulario_buscar.style.display ="none";
    caja__trasera_ingresar.style.opacity="1";
    caja__trasera_login.style.opacity="0";
  }
  else{
    formulario_ingresar.style.display="block";
    container_formulario.style.left ="0px";
    formulario_buscar.style.display ="none";
    caja__trasera_ingresar.style.display="none";
    caja__trasera_login.style.display="block";
    caja__trasera_login.style.opacity="1";
  }
}

function buscar__inmueble(){
  if(window.innerWidth>850){
    formulario_ingresar.style.display="none";
    container_formulario.style.left ="10px";
    formulario_buscar.style.display ="block";
    caja__trasera_ingresar.style.opacity="0";
    caja__trasera_login.style.opacity="1";
  }
  else{
    formulario_ingresar.style.display="none";
    container_formulario.style.left ="0px";
    formulario_buscar.style.display ="block";
    caja__trasera_ingresar.style.display="block";
    caja__trasera_login.style.display="none";
  }
}