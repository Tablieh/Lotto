
const box = document.createElement("div")
box.classList.add("box")

const board = document.createElement("div")
board.classList.add("board")

let nb = 1
let parent = document.querySelector('#container');



    for (let i = 1; i <= 49; i++){
        const all = document.querySelector('#container');
        const toto = document.createElement("div")
        all.appendChild(toto);
        toto.classList.add("newDiv");
        const newbox = box.cloneNode()
        newbox.innerText = i
        newbox.style.color = "white";
        toto.appendChild(newbox)
        
        /* const img = document.createElement("img")
        img.style.width="150px"
        img.style.height="150px"
        img.src="img/"+i+".jpg";
        newbox.style.position="absolute";
        
        toto.appendChild(img) */

        /* function shuffleChildren(parent){
        let children = parent.children
        let i = parent.children.length, k , temp
        while (--i > 0){
            k = Math.floor(Math.random() * (i+1))
            temp = children[k]
            children[k] = children[i]
            parent.appendChild(temp)
            
        }
        }
        
            shuffleChildren(all)
            function random_bg_color() {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            console.log(bgColor);
        
            newbox.style.backgroundColor = bgColor;
            //document.body.style.background = bgColor;
            }

            random_bg_color(); */
          /*           

           newbox.addEventListener("click", function(){
            if (newbox.style.display === "none") {
                img.addEventListener("click", function(){
                    newbox.style = 'display: block'
                })
                } else {
                    newbox.style = 'display: none'
                }
                //console.log("Boite n°"+ i +", click !")
                
                //location.reload()
            }) */
      
         
        
    }