let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let newBtn =  document.querySelector(".newBtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let disabledBtn = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
let enabledBtn = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
        // turnO = true;
    }
}

let turnO = true;

const newGame = () => {
    turnO = true;
    enabledBtn();
    msgContainer.classList.add("hide");

}
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("Button was clicked")
        if (turnO){
            box.innerText = "O"
            turnO = false;
        }else{
            box.style.color = "red"
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });

} );

const showWinner = (winner) =>{
    msg.innerText = `Contratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");//show the hide div for winner
    disabledBtn();//dsiabled all buttons
};


const checkWinner = () => {
    for (pattern of winPatterns){ 
        let pos1val = boxes[pattern [0]].innerText; //checking all boxes inner-text  value.
        let pos2val = boxes[ pattern[1]].innerText
        let pos3val = boxes[ pattern[2]].innerText
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){ //match patterns
            if(pos1val===pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
                
            }
        }
    }
}

newBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", newGame);


