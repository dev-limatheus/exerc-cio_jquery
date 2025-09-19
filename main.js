$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){ 
            e.preventDefault();
            const novaTarefa = $('#nova-tarefa').val();
            const novoItem = $('<li></li>').text(novaTarefa);
                $(novoItem).appendTo('#listas');
                $(novoItem).hide();
                $(novoItem).fadeIn(200);

        $('#listas').on('click', 'li', function(){
            $(this).toggleClass('done');
            });

        $('#nova-tarefa').val('');
    });
});
