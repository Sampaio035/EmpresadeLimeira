const galeria = () => {
    
    // Selecionar todas as imagens em miniaturas
    var miniaturas = document.querySelectorAll(".galeria_miniaturas img")

    //console.log(miniaturas);

    // Iterar sobre miniaturas
    miniaturas.forEach(function (miniatura) {

        //console.log(miniatura);

        // Em cada img, adicionar um ouvinte
        miniatura.addEventListener("click", function () {
            //console.log(this.src);
            document.getElementById("foto_grande").src = this.src
        })

    })
}

galeria()