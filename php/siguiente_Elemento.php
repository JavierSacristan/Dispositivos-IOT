<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: Content-Type');
  include('conexionBd.php');

  $contenido=$_POST['Envio'];
    $contenido= str_replace("\\","", $contenido);    
    $array=explode(",",$contenido);
 
 $condicion=">";
 $id = $array[0];
 $sql="";
 //Siguiente
$sql= "SELECT * FROM IOT_SacristanJ WHERE id $condicion $id LIMIT 1";

//$sql= "SELECT * FROM vecinos WHERE idVecino  >  1 Limit 1";
$resultado = mysqli_query($connect,$sql);
while($row=mysqli_fetch_assoc($resultado)){
$output[]=$row;
}
print(json_encode($output));
$connect->close();

?>
