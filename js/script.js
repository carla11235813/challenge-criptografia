const btnCriptografar = document.querySelector("#btnCriptografar");
const btnDescriptografar = document.querySelector("#btnDescriptografar");
const btnCopiar = document.querySelector("#btnCopiar");
const textoRecebido = document.querySelector("#texto__recebido");
const textoEnviado = document.querySelector("#texto__enviado__p"); 


/*   FUNÇÕES   */

function verificarLetras(texto) {
    const letrasAceitas = "abcdefghijklmnopqrstuvwxyz ";

    for (var i = 0; i < texto.length; i++) {
        if (!letrasAceitas.includes(texto[i])) {
            alert("Digite Apenas letras minúsculas e sem acentos")
            return false;
        }
    }

    return true;
}

function criptografar(textoDescriptografado) {
    substituicoes = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }

    let textoCriptografado = textoDescriptografado.split('').map((letra) => substituicoes[letra] || letra).join('');

    textoEnviado.textContent = textoCriptografado;
}

function descriptografar(textoCriptografado) {
    substituicoes = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',        
        'ober': 'o',
        'ufat': 'u'
    }

    let textoDescriptografado = textoCriptografado.split(/(ai|enter|imes|ober|ufat)/).map((part) => substituicoes[part] || part).join('');
    textoEnviado.textContent = textoDescriptografado;
    
}


/*   EVENTOS  */

btnCriptografar.addEventListener("click", function() {
    if (verificarLetras(textoRecebido.value)) {
        criptografar(textoRecebido.value);
    }
})

btnDescriptografar.addEventListener("click", function() {
    verificarLetras(textoRecebido.value);
    console.log(`Descriptografar ${textoRecebido.value}`)

    if (verificarLetras(textoRecebido.value)) {
        descriptografar(textoRecebido.value);
    }
})


btnCopiar.addEventListener("click", function() {
    console.log("Copiar")
    
    navigator.clipboard.writeText(textoEnviado.textContent)
    .then(function() {
      alert("Copiado!")
    })    
})