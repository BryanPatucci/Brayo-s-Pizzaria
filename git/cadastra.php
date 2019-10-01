<?php
$conexao = mysqli_connect("localhost", "id11075037_crudpizza", "crudpizza", "id11075037_crudpizza");

$sabor = $_GET['sabor'];
$valor = $_GET['valor'];

$query = "insert into tb_pizza values (null, '$sabor', '$valor')";

mysqli_query($connexao, $query);

?>
