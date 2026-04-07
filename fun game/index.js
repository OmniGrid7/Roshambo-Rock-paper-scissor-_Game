let youEl = document.getElementById("you-el")
let computerEl= document.getElementById("computer-el")
let winMessage = document.getElementById("win-message") 
let moves=["🖐🏻","👊🏻","✌🏻"]
 
function paper(){
    youEl.textContent = moves[0]
}
function rock(){
    youEl.textContent = moves[1]
} 
function scissor(){
    youEl.textContent = moves[2]
}
function winMessages(){
    if(youEl.textContent == moves[0] && computerEl.textContent == moves[0]){
        winMessage.textContent = "It is tie"
    }else if(youEl.textContent == moves[0] && computerEl.textContent == moves[1] ){
        winMessage.textContent = "You win the match"
    }else if(youEl.textContent == moves[0]&& computerEl.textContent == moves[2]){
        winMessage.textContent = "You loss the match"
    }else if(youEl.textContent == moves[1] && computerEl.textContent == moves[1]){
        winMessage.textContent = "It is tie"
    }else if(youEl.textContent == moves[1] && computerEl.textContent == moves[2] ){
        winMessage.textContent = "You win the match"
    }else if(youEl.textContent == moves[1]&& computerEl.textContent == moves[0]){
        winMessage.textContent = "You loss the match"
    }if(youEl.textContent == moves[2] && computerEl.textContent == moves[2]){
        winMessage.textContent = "It is tie"
    }else if(youEl.textContent == moves[2] && computerEl.textContent == moves[0] ){
        winMessage.textContent = "You win the match"
    }else if(youEl.textContent == moves[2]&& computerEl.textContent == moves[1]){
        winMessage.textContent = "You loss the match"
    }
}
 
function computerMove(){
    for( let i=0; i<=moves.length;i++){
        let random = moves[Math.floor(Math.random()*moves.length)]
        computerEl.textContent = random
    }
    winMessages()
}
function newGame(){
    youEl.textContent = ""
    computerEl.textContent = ""
    winMessage.textContent = ""
}
