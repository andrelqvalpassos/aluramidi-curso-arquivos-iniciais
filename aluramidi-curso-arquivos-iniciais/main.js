function tocaSomSax () {
    document.querySelector( ).play();
    
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < ListaDeTeclas.length ) {
    ListaDeTeclas [0].onclick = tocaSomSax;

    contador = contador + 1;

    console.log(contador);

}