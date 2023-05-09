
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

 let listaNumeriOrdinata = listaNum ("1", "100")



 /* creo i quadrati che comporranno la griglia */

 for (let i = 0; i < listaNumeriOrdinata.length; i++) {

    /* richiamo la funzione per creare il div  */
    const newSquare = square("div", "square");

    /* creo lo span che conterrà il numero */

    const newSpan = document.createElement("span"); 
    newSpan.append(listaNumeriOrdinata[i]);
    newSquare.append(newSpan);
    newSpan.classList.add("dispalynone");
    
    /* funzione che al click aggiungo classe background e dispalyactive */
    newSquare.addEventListener("click",
    function() {

    newSquare.classList.add("background");
    newSpan.classList.add("dispalyactive");
    console.log(newSpan);
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

    const arrey = []
    
    for (let i = min; i <= max; i++) {

        arrey.push(i)
        
    }
    
    return arrey;
} 


