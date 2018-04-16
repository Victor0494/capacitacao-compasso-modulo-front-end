//para usar jq se usa o "$" na frente das variaveis, o $ é só um atalho para jq
$(function () {
    //var txt = document.getElementById('txt_nome'); referencia em js
    //var txt = $('#txt_nome'); // referencia em jq
    //txt.val();

    // a cada 2 seg ele executa a function, setinterval, fica em loop executando 
    /* setInterval(function()
     {
         
         txt.toggle('slow');//faz a mesma coisa que o codigo abaixo,só de forma mais facil
         if(txt.is(":visible")){ // .is retorna um boleano, esta pedindo se esta visivel
 
             txt.hide('slow'); // esconde o input
 
         }else{
                 txt.show('show'); // mostra o input
         }
 
         txt.hide('slow');
                
 
     },2000); */
    var $div_produtos = $('#produtos'); //referencia para o body da pagina
    var $div_fmr_cadastro = $('#div_fmr_cadastro');// mesma coisa que o getbyId
    var $msg_sucesso = $(".js-msg-sucesso");

    //pega o primeiro input do fmr_cadastro
    var $txt_nome_produto = $div_fmr_cadastro.find('#txt-nome');
    var $txt_preco_produto = $div_fmr_cadastro.find('#txt-preco');
    
    //array com 3 elementos
    var $ar_produtos = [
        { "nome": "Produto 1", "valor ": 10.5 },
        { "nome": "Produto 2", "valor ": 98.5 },
        { "nome": "Produto 3", "valor ": 14.5 }
    ];

    function renderizaProdutos() {
        //limpa os objetos dentro da div
        $div_produtos.empty();


        //faz a mesma coisa que o For
        $.each($ar_produtos, function (key, obj) {

            var $div = $("<div>"); // nova div na memoria
            var $h1 = $("<h1>");
            var $p = $("<p>");

            //adiciono o nome no h1
            $h1.html(obj.nome);

            // adiciona o preco no paragrafo
            $p.html(obj.valor);

            //adiciono h1 dentro da div
            $div.append($h1);
            $div.append($p);

            //adiciono o objeto div no container produtos

            $div_produtos.append($div);
        });


    }

    //localiza dentro da div o campo dentro form
    $div_fmr_cadastro.find(".js-fmr-cadastro").submit(function(e)
    {
        e.preventDefault();
        $ar_produtos.push
        (
        
            {
            "nome" : $txt_nome_produto.val(),
            "valor" : $txt_preco_produto.val() 
            }
        
        );
        
        
        renderizaProdutos();        
        //reseta o formulario
        
        $(this)[0].reset();

        $msg_sucesso.removeClass('hide');

        setTimeout(function() {
            $msg_sucesso.addClass('hide');
            
        }, 5000);

        location.href = "#div_fmr_cadastro";
    });


    renderizaProdutos();
});