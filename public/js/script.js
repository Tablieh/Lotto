
const box = document.createElement("div")
box.classList.add("box")

const board = document.createElement("div")
board.classList.add("board")

let nb = 1
let parent = document.querySelector('#container');

let clicked=0;
let lotto_card = [];

    for (let i = 1; i <= 49; i++){
        const all = document.querySelector('#container');
        const toto = document.createElement("div")
        all.appendChild(toto);
        toto.classList.add("newDiv");
        const newbox = box.cloneNode()
        newbox.innerText = i
        newbox.style.color = "white";
        newbox.style.margin = "3px";
        toto.appendChild(newbox)   

        newbox.addEventListener("click", function (){
        clicked+=1;
        if (clicked<=5) {
          newbox.style.color = "rgb(56, 170, 215)";
          newbox.style.border = "1px solid rgb(56, 170, 215)";
          lotto_card+= newbox.innerText;
          console.log(lotto_card); 
          console.log(clicked);
        }
       
        },{once : true})
      
         
        
    }