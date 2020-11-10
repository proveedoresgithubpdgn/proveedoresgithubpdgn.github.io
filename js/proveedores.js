"use strict"
var forma = document.getElementById("forma");
var salidaClave = document.getElementById("salidaClave");
var salidaNombre = document.getElementById("salidaNombre");
var salidaTelefono = document.getElementById("salidaTelefono");
var salidaFecha = document.getElementById("salidaFecha");

var clave = forma["clave"].value.asNumber ? forma["clave"].value : parseInt(forma["clave"].value);
var nombre = forma["nombre"].value;
var telefono = parseInt(forma["telefono"].value);
var fecha = new Date(forma["fecha"].value);
//Dia-Mes-Alo Fecha
var dia = fecha.getDate()+1,
    mes = fecha.getMonth()+1,
    año = fecha.getFullYear();

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
            "Septiembre", "Octubre","Nomviembre", "Diciembre"];

BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
// Definición de constantes
var FMT_TEL = "+00000000000000";
var error = false;



Node.prototype.error = function (mensaje) {
    this.className = "error";
    this.textContent = mensaje;
  };
  Node.prototype.info = function (mensaje) {
    this.className = "";
    this.textContent = mensaje;
  }

  
function procesa(){
    salidaClave.value = "Clave recuperada: " + clave;
    salidaNombre.value = "Nombre recuperado: " + nombre;
    salidaTelefono.info("Telefono recuperado: " + numeral(telefono).format(FMT_TEL))
    salidaFecha.value = "Fecha recuperada: " + dia + "/" + mes + "/" + año + " | " + dia + " de " + meses[mes-1] + " del " + año;
  }
 



