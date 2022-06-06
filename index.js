(function(){
      'use strict'
      var jogo={
            palavra:"HOLA",
            estado:5,
            adivinhado:["A", "L"],
            errado:["B", "J", "K", "C"]
      }

      var $html = {
            
            man:document.getElementById("man"),
            adivinhado:document.querySelector(".adivinhado"),
            errado:document.querySelector(".errado")
      }

function desenhar(jogo) {
      //Atualizar a imagem do man
      var $elem
      $elem = $html.man
      $elem.src = "./img/estagios/0" + jogo.estado + '.png'

      //Gerar as letras adivinhadas
      var palavra=jogo.palavra
      var adivinhado=jogo.adivinhado
      $elem=$html.adivinhado

      for (let letra of palavra){
            let $span=document.createElement("span")
            let $txt=document.createTextNode("")
            if(adivinhado.indexOf(letra)>= 0) {
                $txt.nodeValue =letra
            }
            $span.setAttribute("class","letra adivinhada")
            $span.appendChild($txt)
            $elem.appendChild($span)
      }
            //criar letras erradas
            var errado=jogo.errado
            $elem = $html.errado
            for(let letra of errado){
                 let $span=document.createElement('span')
                 let $txt=document.createTextNode(letra)
                 $span.setAttribute("class","letra errada")
                 $span.appendChild($txt)
                 $elem.appendChild($span)
            }

}
console.log(jogo)
desenhar(jogo)


}())