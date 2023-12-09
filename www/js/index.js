//Assim que a rota index começar
//Verificar se tem permissão de usar speechrecognition
window.plugins.speechRecognition.hasPermission(
    //Se sucesso 
    function (permissao) {
        //Se não tiver permissão
        if (!permissao) {
            //Solicitar a permissão
            window.plugins.speechRecognition.requestPermission(
                //Se sucessp
                function (temPermissao) {
                   app.dialog.alert('Permissão concedida: ' + temPermissao)
                }, 
                //Se erro
                function (erro) {
                    app.dialog.alert('Não é possível ultilizar a assistente sem a permissão do microfone')
                })
        }
     }, 
     //Se der error
     function (error) {
        app.dialog.alert('HasPermission error:' + error)
     })

    
//Clique do botão falar
$('#btn_falar').on('click', function() {
    let options = {
        language: 'pt-BR',
        showPopup: false,  // Pop-up do google para reconhecer a fala
        showPartial: true 
      }
       
      //Começou a escutar
      window.plugins.speechRecognition.startListening(
        //Se sucesso
        function (dados) {
            $.each(dados, function (index, texto) {
                //Colocar o que ela entende no paragrafo chamado pergunta
                $('#pergunta').html("").append(texto);
                //Pega o valor do que ela entendeu
                let pergunta = $('#pergunta').html().toLowerCase();

                //Verificar se o comando é esse
                if (pergunta == "acessar memórias" || pergunta == "acessar memória") {
                    app.views.main.router.navigate('/memorias/');
                }
            })
        }
        //Se der erro
        ,function (error) {
            app.dialog.alert('Houve um erro:'+error)
        }
        , options)
})