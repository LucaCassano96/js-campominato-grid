
/* creo la funzione per generare al click la griglia */

let startGame = document.querySelector(".play");

startGame.addEventListener ("click",  
function() {

/* creo il contenitore della griglia */

const main = document.querySelector("main");
const gridContainer = `<div class="grid"></div>`;
 main.innerHTML += gridContainer;

 const container = document.querySelector(".grid");
 console.log(container);


 /* creo i quadrati che comporranno la griglia */

 for (let i = 1; i <= 100; i++) {
    
    var newSquare = square("div", "square")
    
    newSquare.addEventListener("click",
    function() {
    newSquare.classList.add("background")
});

    container.append(newSquare)

  

 }


    

})





/* Funzioni */

        /* creare la griglia */

function square(square, classAdd) {


    const grid = document.createElement(square);
    grid.classList.add(classAdd);
    return grid

    
}