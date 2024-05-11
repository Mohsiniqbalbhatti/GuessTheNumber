// defining variables 
let check = document.getElementById('check')
let restart = document.getElementById('restart')
let yourscore = document.getElementById('yourscore')
let highscore = document.getElementById('highscore')
let tries = document.getElementById('tries')
let attempts = 20;
let guessinput = document.getElementById('guess')
let guess = guessinput.value
//defining audios
let win = new Audio('win.wav')
let loss = new Audio('loss.wav')
let wrong = new Audio('wrong.wav')

restartgame()
// function to restart game 
function restartgame() {    
    let r = Math.random() * 100;
    random_number = Math.ceil(r);
    // console.log(random_number);
    attempts = 20;
    check.style.display = 'block'
    restart.style.display = 'none'
hint.innerHTML = "Guess The Secret Number If you can"
yourscore.innerHTML = (attempts) 
guessinput.value = "" 

}




// action to check number 
check.addEventListener('click', ()=>{
let hint = document.getElementById('hint')
let guessinput = document.getElementById('guess')
let guess = guessinput.value

if(attempts == 0){
   guessinput.value = "" 
   hint.innerHTML = "Try Again!"
   check.style.display = 'none'
   restart.style.display = 'block'
   loss.play()
}

else if (guess<1) {
hint.innerHTML = "please enter a number between 1 and 100"
}
else if (guess> 100) {
    hint.innerHTML = "please enter a number between 1 and 100"
}
else{
attempts--
    if (guess > random_number) {
        hint.innerHTML = "The secret number is lower than your guess."
        // console.log(attempts)
        yourscore.innerHTML= attempts
        wrong.play()
    }
    else if( guess  <  random_number){
        hint.innerHTML = "The secret number is Higher than your guess."
        // console.log(attempts )
        yourscore.innerHTML= attempts
        wrong.play()
    }
    else{
    hint.innerHTML = "Congrats you won!"
    check.style.display = 'none'
    restart.style.display = 'block'
    win.play()
    // console.log(yourscore.innerHTML)
     }
    }
 }
)
 
// action to restart button 
restart.addEventListener('click' , ()=>{
   restartgame();
})
