<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: Content-Type');
  include('conexionBd.php');

  $contenido=$_POST['Envio'];
    $contenido= str_replace("\\","", $contenido);    
    $array=explode("|",$contenido);
 
 $id = $array[0];
 $tipo=$array[1];
 $cantidad = $array[2];
 $fecha = $array[3];
 $hora = $array[4];
 $latitud = $array[5];
 $longitud = $array[6];
 $direccion = $array[7];
 $descripcion = $array[8];
 $sql="";

 

$sql= "UPDATE IOT_SacristanJ SET tipo='$tipo', cantidad='$cantidad', hora='$hora', fecha='$fecha', latitud='$latitud', longitud='$longitud', direccion='$direccion', descripcion='$descripcion' WHERE id=$id";

$resultado = mysqli_query($connect,$sql);


$connect->close();

?>
