// criar uma unção com arrow function
const galeria= () =>{

    // Selecionar todas as imagens em miniaturas
    var miniaturas = document.querySelectorAll(".galeria_miniaturas img")

    // console.log(miniaturas);

    // interar sobre miniaturas
    miniaturas.forEach(function (miniatura){
        //console.log(miniatura);

        // em cada em imagem add um ouvinte
        miniatura.addEventListener("click", function (){
            //console.log(this.src);
            document.getElementById("foto_grande").src = this.src

        })

    })
}

galeria()