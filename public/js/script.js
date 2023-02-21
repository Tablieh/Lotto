
const box = document.createElement("div");
box.classList.add("box");

const board = document.createElement("div");
board.classList.add("board");

let nb = 1;
let parent = document.querySelector("#container");

let clicked = 0;
let lotto_card = [];
for (let i = 1; i <= 49; i++) {
  
  const all = document.querySelector("#container");
  const toto = document.createElement("div");
  const all1 = document.querySelector("#content");
  all1.appendChild(toto);
  toto.classList.add("newDiv");
  const newbox = box.cloneNode();
  newbox.innerText = i;
  newbox.style.color = "white";
  newbox.style.margin = "3px";
  toto.appendChild(newbox);

  newbox.addEventListener("click", function () {
    clicked += 1;
    if (clicked <= 5) {
      newbox.style.color = "rgb(56, 170, 215)";
      newbox.style.border = "1px solid rgb(56, 170, 215)";
      const clickedNumber = parseInt(newbox.innerText);
      lotto_card.push(clickedNumber);
    }
    if (clicked == 5) {
      const tirageText = document.createElement("div");
        tirageText.innerText = "Tirage: ";
        tirageText.classList.add("tirageText");
        all.appendChild(tirageText);
      shufflePick();
      const resultDiv = document.createElement("div");
      resultDiv.style.display = "flex";
      resultDiv.style.marginTop = "10px";
      resultDiv.style.alignItems = "center";
      resultDiv.style.flexWrap = "wrap";
      resultDiv.style.fontSize = "2rem";
      resultDiv.style.fontFamily = 'Great Vibes';
      resultDiv.style.fontWeight = "700";
      resultDiv.classList.add("resultDiv");
      const comparison = compareArrays(lotto_card, table);
      let winner = "";
      let win=0;
      for (let i = 0; i < comparison.length; i++) {
        const newbox = box.cloneNode();
        newbox.innerText = comparison[i].number;
        newbox.style.margin = "3px";
        
        if (comparison[i].correct) {
          win++;
          newbox.style.color = "green";
          newbox.style.border = "3px solid green";
        } else {
          newbox.style.color = "red";
          newbox.style.border = "3px solid red";
        }
        resultDiv.appendChild(newbox);
        
      }
      let winnerNumber =win;
        winner+=winnerNumber;
      console.log(comparison)
      console.log(table + '\n' +"Table shuffle")
      console.log(lotto_card + '\n' +"Table selected")
      let result1 = document.querySelector('.tirageText')
      result1.appendChild(resultDiv);
      // create a button element
      let result = document.querySelector('#container')
      let Button = document.createElement("button");
      Button.innerHTML = "<i class='fa-solid fa-rotate'></i>Rejouer ";
      result.appendChild(Button);

      Button.classList.add("reloadButton");
      
      
      // add click event listener to the button
      Button.addEventListener("click", function () {
          // reload the page
          location.reload();
      });
      let WinnerText = document.createElement("div");
      WinnerText.classList.add("WinnerText");
      const flex = document.createElement("div");
      resultDiv.appendChild(flex);
      WinnerText.innerHTML = "Il s'agite " + winner + "   numéro gagnant!";
      flex.appendChild(WinnerText);
    }
  }, { once: true });
}
let table = [];
function shufflePick() {
  const tableSize = 5;
  for (let i = 0; i < tableSize; i++) {
    const randomNumber = Math.floor(Math.random() * 49) + 1;
    table.push(randomNumber);
  }
}

function compareArrays(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    const index = array2.indexOf(array1[i]);
    result.push({
      number: array2[i],
      correct: index !== -1,
    });
  }
  return result;
}
