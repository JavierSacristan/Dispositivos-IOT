var map;
var murallas = new Array();
var latitud = 41.67097948393865;
var longitud = -3.6769259916763985;
let Pdistancia=document.getElementById("distancia");

map = new google.maps.Map(
    document.getElementById('map_canvas'), {
    // En el mapa se visualiza el mapa correspondiente a esta latitud, longitud
    center: new google.maps.LatLng(latitud, longitud),//latitud,longitud),//
    // center: new google.maps.LatLng(41.6685198,-3.6886618),//latitud,longitud),//
    zoom: 18, // zoom del mapa
    draggableCursor: 'auto', // forma del cursor
    draggingCursor: 'crosshair',
    mapTypeId: google.maps.MapTypeId.SATELLITE // tipo de mama
});

//Evento click sobre el mapa que obtiene la latitud y longitud
// Además en el array murallas almacenamos el dato obtenido para
// mas adelante dibujar un línea que una los marcadores (Trazar Recinto)
google.maps.event.addListener(map, 'click', function (event) {
// Obtiene la latidu y longitud
    datolatitud_longitud = event.latLng.toString();
// Guarda el dato en el array murallas
    murallas.push(datolatitud_longitud);
// Visualiza la latitud
    datolatitud_longitud = datolatitud_longitud.substring(1,
        datolatitud_longitud.length - 1)
    cLatitud.value = (datolatitud_longitud.split(",")[0]).trim();
    cLongitud.value = (datolatitud_longitud.split(",")[1]).trim();

   
// Crea un objeto de propiedades en formato json, con los datos del marcador
// a crear
    var icono = {
        url: "./imagenes/curso.png", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
// Crea el marcador y lo añade la mapa (map)
    marker = new google.maps.Marker({
        position: event.latLng,
        icon: icono,
        map: map,
        nombre: 'Pepino' // No hace nada especial, Simplemente es una propiedad  
    });

    //Array de imagenes que cambiaran solas
    let aImagenes=new Array();
    aImagenes[0]="./imagenes/bandera.png";
    aImagenes[1]="./imagenes/Catalina.png";
    aImagenes[2]="./imagenes/lupa.jpg";
    aImagenes[3]="./imagenes/Logo.jpg";

    let i=0;
    aaa=setInterval(mostrar,2000);

    function mostrar(){
        icono.url=aImagenes[i];

        marker = new google.maps.Marker({
            position: event.latLng,
            icon: icono,
            map: map,
            nombre: 'Pepino' // No hace nada especial, Simplemente es una propiedad  
        });
        i++;
        if (i==3){
            i=0;
        }
    }   

// Evento para el marcador creado
    google.maps.event.addListener(marker, 'click', function () {
        alert("Click en marcador " + this.nombre + latitud_longitud.value);
    });
     //Al hacer click en el marcador creado obtener la dirección postal correspondiente a la latitud y longitud
        leeDireccion(event.latLng);
});

function leeDireccion(latlng) {
    geocoder = new google.maps.Geocoder();
    if (latlng != null) {
   
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    MuestraDireccion(latlng, results[0].formatted_address)
                } else {
                    alert('No results found');
                }
            } else {
                alert('Geocoder failed due to: ' + status);
            }
        });
    }
}

function MuestraDireccion(latlng, direccion) {
   //Muestra la dirección obtenida en un elemento html de la página
    cDireccion.value = direccion;
}

var trazarRecinto=document.getElementById("trazarRecinto");
trazarRecinto.addEventListener("click",Trazar_onclick,false);

var medirDistancia=document.getElementById("medirDistancia");
medirDistancia.addEventListener("click", Mideme, false);

function Trazar_onclick() {

    var tipo_trazo;
    var colortrazado ="blue";

    cRecinto = ""
    var posiciones = "[";

 	//Genera un string de objetos  google.maps.LatLng con todos los marcadores
	// que se han guardado en murallas
    for (i = 0; i < murallas.length; i++) {
        posiciones = posiciones + "new google.maps.LatLng" + murallas[i] + ",";
        cRecinto = cRecinto+ murallas[i] + ",";
    }
    posiciones = posiciones.substr(0, posiciones.length - 1);

    if (tipo_trazo == "recinto") {
        posiciones = posiciones + ",new google.maps.LatLng" + murallas[0] + "]";
    }
    else { posiciones = posiciones + "]"; }
    //alert("POSICIONES " + posiciones);
    if (murallas.length> 0) {
        var polygon = "new google.maps.Polyline({" +
            "path:" + posiciones + "," +
            "strokeColor:'" + colortrazado + "'," +
            "strokeOpacity: 2," +
            "strokeWeight: 1.3," +
            "geodesic: true})";

        eval(polygon).setMap(map);
    }
   // murallas = new Array();  
}

function Mideme() {  
            var pi=murallas[murallas.length-2].toString().replace('(',"");
            pi=pi.toString().replace(')',"");
            api=pi.split(",");
            var pf=murallas[murallas.length-1].toString().replace('(',"");
            pf=pf.toString().replace(')',"");
            apf=pf.split(",");
                
      
            var posicionInicial = new google.maps.LatLng(api[0],api[1]);//  eval(pi));//
            var posicionFinal = new google.maps.LatLng(apf[0],apf[1]);// eval(pf));// 
 
            var angulo = google.maps.geometry.spherical.computeHeading( posicionInicial,posicionFinal);
 
            var distancia = google.maps.geometry.spherical.computeDistanceBetween( posicionInicial,posicionFinal);
            distancia=Math.round(distancia);
            Pdistancia.innerHTML="Distancia: "+distancia+" metros";
            pos=0;
            //murallas = new Array();
      
}

function marcadorPosiciones(){    
    //recojo la latitud y la longitud del registro que se este mostrando
    let latitud=document.getElementById("cLatitud").value;
    let longitud=document.getElementById("cLongitud").value;

    let latlog = new google.maps.LatLng(latitud, longitud);

    var icono = {
        url: "./imagenes/curso.png", // url
        scaledSize: new google.maps.Size(25, 25), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    // Crea el marcador y lo añade la mapa (map)
    marker = new google.maps.Marker({
        position: latlog,
        icon: icono,
        map: map,
        nombre: 'Pepino' // No hace nada especial, Simplemente es una propiedad  
    });

    //Array de imagenes que cambiaran solas
    let aImagenes=new Array();
    aImagenes[0]="./imagenes/bandera.png";
    aImagenes[1]="./imagenes/Catalina.png";
    aImagenes[2]="./imagenes/lupa.jpg";
    aImagenes[3]="./imagenes/Logo.jpg";

    let i=0;
    aaa=setInterval(mostrar,2000);

    function mostrar(){
        icono.url=aImagenes[i];

        marker = new google.maps.Marker({
            position: latlog,
            icon: icono,
            map: map,
            nombre: 'Pepino' // No hace nada especial, Simplemente es una propiedad  
        });
        i++;
        if (i==3){
            i=0;
        }
    }
    
}
