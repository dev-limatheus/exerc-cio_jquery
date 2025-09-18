$(document).ready(function(){

$('form').on('submit', function(e){ 
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
            $(`<a "${enderecoNovaImagem}" />`).appendTo(novoItem);
            
}
})