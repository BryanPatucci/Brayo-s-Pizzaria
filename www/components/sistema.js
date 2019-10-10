//Voltar para pagina anterior
$(document).on("click","#listar", function(){
$(location).attr
("href","listar.html");
});

//cadastrar pizza
$(document).on("click","#cadastrar",function(){
var parametros = {
  "sabor":$("#sabor").val(),
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

//listar pizzas
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

//listar sabor, valor e codigo das pizzas
$(document).on("change","#lista",function(){
    var parametro ={
      "codigo":$("option:selected",("#lista")).val()
    };

    $.ajax({
      type: "post",
      url:"https://brayospizzaria.000webhostapp.com/listar%20um.php",
      data:parametro,
      dataType:"json",

      success: function(data){
        $("#codigo").val(data.pizza.codigo);
        $("#sabor").val(data.pizza.sabor);
        $("#valor").val(data.pizza.valor)
      },

      error: function(data){
        navigator.notification.alert("Erro ao buscar registros!");
      }
  });
});

//Editar
$(document).on("click","#editar",function(){
  $("#sabor").prop("readonly", false);
  $("#valor").prop("readonly", false);
});

$(document).on("click", "#cancelar", function(){
  $("#sabor").val("");
  $("#valor").val("");
  $("#sabor").prop("readonly", true);
  $("#valor").prop("readonly", true);
});

$(document).on("click", "#salvar", function(){

});

$(document).on("click", "#deletar", function(){
  
});