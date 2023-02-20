
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
          //lotto_card+= [newbox.innerText];
          const clickedNumber = parseInt(newbox.innerText);
          lotto_card.push(clickedNumber);
          //console.log(lotto_card); 
          //console.log(clicked);
        }
        if (clicked==5) {
          shufflePick();
          const numMatches = checkWinner(lotto_card, table);
          console.log(lotto_card); 
          console.log(table); 
          console.log("Number of matches: " + numMatches);

          function checkWinner(lotto_card, table) {
            let matchvalue=[];
            let matches = 0;
            for (let i = 0; i < lotto_card.length; i++) {
              if (table.includes(lotto_card[i])) {
                matchvalue+= parseInt(lotto_card[i]);
                console.log(matchvalue)
                matches++;
              }
            }
            return matches;
          }
        }

        },{once : true})
    }
    let table = [];
    function shufflePick() {
      const tableSize = 5;
      for (let i = 0; i < tableSize; i++) {
        const randomNumber = Math.floor(Math.random() * 49) + 1;
        table.push(randomNumber);
      }
    }
    
   