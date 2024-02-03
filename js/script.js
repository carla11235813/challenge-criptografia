const btnCriptografar = document.querySelector("#btnCriptografar");
const btnDescriptografar = document.querySelector("#btnDescriptografar");
const btnCopiar = document.querySelector("#btnCopiar");
const textoRecebido = document.querySelector("#texto__recebido");
const textoEnviado = document.querySelector("#texto__enviado__p");

btnCriptografar.addEventListener("click", function() {
    console.log(`Criptografar ${textoRecebido.value}`)
    textoEnviado.textContent = textoRecebido.value;
})

btnDescriptografar.addEventListener("click", function() {
    console.log(`Descriptografar ${textoRecebido.value}`)
    textoEnviado.textContent = textoRecebido.value;
})


btnCopiar.addEventListener("click", function() {
    console.log("Copiar")
    
    navigator.clipboard.writeText(textoEnviado.textContent)
    .then(function() {
      alert("copiado aaaa")
    })
    
    alert("Copiado!")
})