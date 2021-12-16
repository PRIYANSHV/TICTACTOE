console.log("Welcome to Tic Tac Toe");
let music=new Audio("music.mp3");
let turnm=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let isgameover=0;
let turn="X";


//Function to change the turn
function changeTurn()
{
    if(turn=="X")
    {
        turn="O";
    }
    else
    {
        turn="X";
    }
    return turn;
}

//Function to check for a Win
function checkWin()
{
    let boxtext=document.getElementsByClassName("boxText");
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!==''))
        {
            document.querySelector(".info").innerText=boxtext[e[0]].innerText + " Won";
            isgameover=1;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width= "200px";
        }
    })
}

//Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        
        if(boxtext.innerText == ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnm.play();
            music.play();
            checkWin();
            if(!isgameover)
            {
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            }
        }
    })
})

//Add onclick listener to reset button
reset.addEventListener("click",()=>{
    let boxtexts=document.querySelectorAll(".boxText");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    isgameover=0;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width= "0px";

});