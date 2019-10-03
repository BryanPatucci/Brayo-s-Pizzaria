$(document).on("click","#listar", function(){
$(location).attr
("href","listar.html");
});
$(document).on("click","#salvar",function(){
var parametros = {
  "sabor":$("sabor").val(),
  "valor":$("#valor").val()
};
$.ajax({
type:"post",
url:"https://brayospizzaria.000webhostapp.com/cadastra.php",
data:parametros,
success: function(data){
  navigator.notification.alert(data);
  $("sabor").val("");
  $("valor").val("")
},
error: function(data){
  navigator.notification.alert("Erro ao cadastrar!");
}
});
});

function carregaLista(){
        $.ajax({
      type:"post",
      url:"https://brayospizzaria.000webhostapp.com/listar.php",
      dataType:"json",
      success: function(data){
        var itemlista = "";
        $.each(data.pizzas, function(i, dados){
            itemlista += "<option value="+dados.codigo+">"+dados.sabor+"</option>"
        });
        $("#lista").html(itemlista);
      },
      error: function(data){
        navigator.notification.alert("Erro ao buscar resgistro!");
      }
      });
}