<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: Content-Type');
  include('conexionBd.php');

  $contenido=$_POST['Envio'];
    $contenido= str_replace("\\","", $contenido);    
    $array=explode(",",$contenido);
 
 $id = $array[0];
 $sql="";

$sql= "DELETE FROM IOT_SacristanJ WHERE id=$id";

$resultado = mysqli_query($connect,$sql);
while($row=mysqli_fetch_assoc($resultado)){
$output[]=$row;
}
print(json_encode($output));
$connect->close();

?>
