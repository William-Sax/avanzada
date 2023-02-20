<?php

$conexion = mysqli_connect("GGN41876\SQLEXPRESSxa","root","","inmueble_db");
if($conexion){
    echo 'Conectado a la base de datos';
}else{
    echo 'No se ha conectado a la base de datos';
}

?>