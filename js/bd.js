var bGrabar = document.getElementById("grabarRegistro");
bGrabar.addEventListener("click", grabar, false);
function grabar() {
    grabarRegistro = true;
    nuevo = true;
    //'"' + "IdVecino" + '":' + '"' + IdVecino.value + '",'
    cfc = cFecha.value.split("-");
    cFecha.value = cfc[2] + "-" + cfc[1] + "-" + cfc[0];

    var datosElementoUrbano ='"' + "Tipo" + '":' + '"' + cTipo.value + '",'
        + '"' + "Cantidad" + '":' + '"' + cCantidad.value + '",'
        + '"' + "Hora" + '":' + '"' + cHora.value + '",'
        + '"' + "Fecha" + '":' + '"' + cFecha.value + '",'
        + '"' + "Latitud" + '":' + '"' + cLatitud.value + '",'
        + '"' + "Longitud" + '":' + '"' + cLongitud.value + '",'
        + '"' + "Direccion" + '":' + '"' + cDireccion.value + '",'
        + '"' + "Descripcion" + '":' + '"' + cDescripcion.value + '"';

    alert(datosElementoUrbano)
    var ajaxrequest = new XMLHttpRequest();
    var jdatoselemento = "{" + datosElementoUrbano + "}";
    var envio = "Todo=" + jdatoselemento;

    ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/JavierSac/grabarElementoUrbano.php", true);

    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajaxrequest.onreadystatechange = function () {
        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {
            var datosLeidos = ajaxrequest.responseText;
            console.log("Datos Recibidos  :" + datosLeidos);
        }
    };
    //ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //alert(envio)
    ajaxrequest.send(envio);
}

//llamo a primerRegistro para que al ejecutarse el programa se visualice este
primerRegistro();

let bSiguiente=document.getElementById("siguiente");
let bAnterior=document.getElementById("anterior");
let bPrimero=document.getElementById("primero");
let bUltimo=document.getElementById("ultimo");
let bModificar=document.getElementById("modificar");
let bBorrar=document.getElementById("borrar");

bSiguiente.addEventListener("click", siguiente, false);
bAnterior.addEventListener("click", anterior, false);
bPrimero.addEventListener("click", primerRegistro, false);
bUltimo.addEventListener("click", ultimoRegistro, false);
bModificar.addEventListener("click", modificarRegistro, false);
bBorrar.addEventListener("click", borrarRegistro, false);

function siguiente(condicion) {
     nuevo = false;
    grabarRegistro = true;
    if (cId.value == "") {
        cId.value = 0;
    }
    // Conicion id > o <
    var jdatoselemento = cId.value+','+condicion;

    let envio = "Envio=" + jdatoselemento;

   
    var ajaxrequest = new XMLHttpRequest();
   
        ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/JavierSac/siguiente_Elemento.php", true);

    ajaxrequest.onreadystatechange = function () {

        if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {                  
            var datosLeidosJSON = ajaxrequest.response;
            //alert("Datos Recibidos response :" + datosLeidosJSON);
            var sitioLeidos = JSON.parse(datosLeidosJSON);
            if (sitioLeidos != null) {
                 
                visualizaRegistro(sitioLeidos)
            } else {
                alert("No Hay Registros que cumplan la condición")
            }
        }
    };

    ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   
    ajaxrequest.send(envio);
}

function anterior(condicion) {
    nuevo = false;
   grabarRegistro = true;
   if (cId.value == "") {
       cId.value = 0;
   }
   // Conicion id > o <
   var jdatoselemento = cId.value+','+condicion;

   let envio = "Envio=" + jdatoselemento;

  
   var ajaxrequest = new XMLHttpRequest();
  
       ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/JavierSac/anterior_Elemento.php", true);

   ajaxrequest.onreadystatechange = function () {

       if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {                  
           var datosLeidosJSON = ajaxrequest.response;
           //alert("Datos Recibidos response :" + datosLeidosJSON);
           var sitioLeidos = JSON.parse(datosLeidosJSON);
           if (sitioLeidos != null) {
                
               visualizaRegistro(sitioLeidos)
           } else {
               alert("No Hay Registros que cumplan la condición")
           }
       }
   };

   ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
   ajaxrequest.send(envio);
}
 
function primerRegistro() {
    nuevo = false;
   grabarRegistro = true;
   if (cId.value == "") {
       cId.value = 0;
   }

   var jdatoselemento = cId.value;

   let envio = "Envio=" + jdatoselemento;

  
   var ajaxrequest = new XMLHttpRequest();
  
       ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/JavierSac/primer_Elemento.php", true);

   ajaxrequest.onreadystatechange = function () {

       if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {                  
           var datosLeidosJSON = ajaxrequest.response;
           //alert("Datos Recibidos response :" + datosLeidosJSON);
           var sitioLeidos = JSON.parse(datosLeidosJSON);
           if (sitioLeidos != null) {
                
               visualizaRegistro(sitioLeidos)
           } else {
               alert("No Hay Registros que cumplan la condición")
           }
       }
   };

   ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
   ajaxrequest.send(envio);
}

function ultimoRegistro() {
    nuevo = false;
   grabarRegistro = true;
   if (cId.value == "") {
       cId.value = 0;
   }

   var jdatoselemento = cId.value;

   let envio = "Envio=" + jdatoselemento;

  
   var ajaxrequest = new XMLHttpRequest();
  
       ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/JavierSac/ultimo_Elemento.php", true);

   ajaxrequest.onreadystatechange = function () {

       if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {                  
           var datosLeidosJSON = ajaxrequest.response;
           //alert("Datos Recibidos response :" + datosLeidosJSON);
           var sitioLeidos = JSON.parse(datosLeidosJSON);
           if (sitioLeidos != null) {
                
               visualizaRegistro(sitioLeidos)
           } else {
               alert("No Hay Registros que cumplan la condición")
           }
       }
   };

   ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
   ajaxrequest.send(envio);
}

function modificarRegistro() {
    nuevo = false;
   grabarRegistro = true;
   if (cId.value == "") {
       cId.value = 0;
   }

   var jdatoselemento = cId.value+"|"+cTipo.value+"|"+cCantidad.value+"|"+cFecha.value +"|"+cHora.value+"|"+cLatitud.value+"|"+cLongitud.value+"|"+cDireccion.value+"|"+cDescripcion.value;

   let envio = "Envio=" + jdatoselemento;

  
   var ajaxrequest = new XMLHttpRequest();
  
       ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/JavierSac/modificar_Elemento.php", true);

   ajaxrequest.onreadystatechange = function () {

       if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {                  
           var datosLeidosJSON = ajaxrequest.response;
           //alert("Datos Recibidos response :" + datosLeidosJSON);
           var sitioLeidos = JSON.parse(datosLeidosJSON);
           if (sitioLeidos != null) {
                
               visualizaRegistro(sitioLeidos)
           } else {
               alert("No Hay Registros que cumplan la condición")
           }
       }
   };

   ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
   ajaxrequest.send(envio);
}
   
function borrarRegistro() {
    nuevo = false;
   grabarRegistro = true;
   if (cId.value == "") {
       cId.value = 0;
   }

   var jdatoselemento = cId.value;

   let envio = "Envio=" + jdatoselemento;

  
   var ajaxrequest = new XMLHttpRequest();
  
       ajaxrequest.open("POST", "http://www.informaticasc.com/daw_2122/CiudadI/php/JavierSac/borrar_Elemento.php", true);

   ajaxrequest.onreadystatechange = function () {

       if (ajaxrequest.readyState === 4 && (ajaxrequest.status === 200)) {                  
           var datosLeidosJSON = ajaxrequest.response;
           //alert("Datos Recibidos response :" + datosLeidosJSON);
           var sitioLeidos = JSON.parse(datosLeidosJSON);
           if (sitioLeidos != null) {
                alert("Registro eliminado");
               visualizaRegistro(sitioLeidos)
           } else {
               alert("No Hay Registros que cumplan la condición")
           }
       }
   };

   ajaxrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
   ajaxrequest.send(envio);
}

function visualizaRegistro(sitioLeidos) {     
    cId.value = sitioLeidos[0].id;
    cTipo.value = sitioLeidos[0].tipo;
    cCantidad.value = sitioLeidos[0].cantidad;
    cFecha.value = sitioLeidos[0].fecha;
    cHora.value = sitioLeidos[0].hora;
    cLatitud.value = sitioLeidos[0].latitud;
    cLongitud.value = sitioLeidos[0].longitud;
    cDireccion.value = sitioLeidos[0].direccion;
    cDescripcion.value = sitioLeidos[0].descripcion;
}
