
/* creo la funzione per generare al click la griglia */

let startGame = document.querySelector(".play");

startGame.addEventListener ("click",  
function() {

/* creo il contenitore della griglia */

const main = document.querySelector("main");
const gridContainer = `<div id="grid"></div>`;
 main.innerHTML += gridContainer;

 const container = document.querySelector("#grid");
 console.log(container);

 /* arrey numeri da 1 a 100 */

 let arreyNumDaInserire =  listaNum("1", "100");
 console.log(arreyNumDaInserire); 



 /* creo i quadrati che comporranno la griglia */

 for (let i = 0; i < 100; i++) {
    
    const newSquare = square("div", "square");
    
    newSquare.addEventListener("click",
    function() {
    newSquare.classList.add("background");

    
    }
    );

    container.append(newSquare);

 }
  

})





/* Funzioni */

        /* creare la griglia */

function square(div, classAdd) {


    const grid = document.createElement(div);
    grid.classList.add(classAdd);
    return grid

    
}

        /* creare una lista di numeri ordinata  */
function listaNum(min, max) {
    
    for (let i = min; i <= max; i++) {
        
        let element = [i]; 
        console.log(element);
        
        return element;
    }
    
}


    
