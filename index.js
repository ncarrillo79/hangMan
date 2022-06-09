(function () {
  "use strict";
  var jogo = {
    palavra: "ALURA",
    estado: 1,
    adivinhado: [],
    errado: ["B", "J", "K","C"]
  };

  var $html = {
    man: document.getElementById("man"),
    adivinhado: document.querySelector(".adivinhado"),
    errado: document.querySelector(".errado"),
  };

  function desenhar(jogo) {
    //Atualizar a imagem do man
    var $elem;
    $elem = $html.man;
    
    var estado=jogo.estado
    if(estado===8){
      estado=jogo.previo
    }


    $elem.src = "./img/estagios/0" + estado + ".png";

    //Gerar as letras adivinhadas
    var palavra = jogo.palavra;
    var adivinhado = jogo.adivinhado;
    $elem = $html.adivinhado;
    //Deletamos los elementos anteriores
    $elem.innerHTML=""

    for (let letra of palavra) {
      let $span = document.createElement("span");
      let $txt = document.createTextNode("");
      if (adivinhado.indexOf(letra) >= 0) {
        $txt.nodeValue = letra;
      }
      $span.setAttribute("class", "letra adivinhada");
      $span.appendChild($txt);
      $elem.appendChild($span);
    }
    //criar letras erradas
    var errado = jogo.errado;
    $elem = $html.errado;
    //Deletamos los elementos anteriores
    $elem.innerHTML=""

    for (let letra of errado) {
      let $span = document.createElement("span");
      let $txt = document.createTextNode(letra);
      $span.setAttribute("class", "letra errada");
      $span.appendChild($txt);
      $elem.appendChild($span);
    }
  }

  function adivinhar(jogo, letra) {
    //si ya se ha perdido o ganado ja não tem nada a fazer
    let estado = jogo.estado;
    if (estado === 1 || estado === 8) {
      return;
    }

    var adivinhado = jogo.adivinhado;
    var errado = jogo.errado;
    //se já foi adivinhada ou errada a letra não temos que fazer nada
    if (adivinhado.indexOf(letra) >= 0 || errado.indexOf(letra) >= 0) {
      return;
    }
    var palavra = jogo.palavra;

    //se é letra da palavra
    if (palavra.indexOf(letra) >= 0) {
      let ganhado = true;
      //devemos conferir se chegamos ao estado ganhado
      for (let l of palavra) {
        if (adivinhado.indexOf(l) < 0 && l != letra) {
          ganhado = false;
          jogo.previo=jogo.estado
          break;
        }
      }

      //se já tem ganhado, devemos indicarlo
      if(ganhado){
            jogo.estado=8
      }
      //Agregar a letra à lista de palavras adivinhadas
      adivinhado.push(letra)
    }else{
      //se não é letra devemos atualizar o estado para um estado mas cerca da forca. O homem esta mais próximo da forca
      jogo.estado--

      //agregamos a letra, à letra de letras erradas
      errado.push(letra)
    }
  }

 window.onkeypress= function adivinharLetra(e){
   var letra = e.key 
   letra=letra.toUpperCase()
   if(/[^A-Z]/.test(letra)){
     return
   }

   adivinhar(jogo,letra)
   desenhar(jogo);
  
 }
  // adivinhar(jogo, "U")
 
   //adivinhar(jogo, "R")
 
  desenhar(jogo);
}());
