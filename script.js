// JavaScript File
let randomNum = Math.floor((Math.random() * 100) + 1 );
let display = document.getElementById('result');
let chance = 5;

function checkResult(){
    let guess = parseInt(document.getElementById('number').value);
    
    if (randomNum > guess){
        display.style.color = "#d9534f";
        display.innerHTML = "To low my friend";
        chance--;
        if(chance == 0){
            display.style.color = "red";
            display.innerHTML = "Errrrrrr, no chance left! Good Luck Next Time";
            randomNum = Math.floor((Math.random() * 100) + 1 );
        }
    }else if(randomNum < guess){
        display.style.color = "#d9534f";
        display.innerHTML = "Nope, too high";
        chance--;
        if(chance == 0){
            display.style.color = "red";
            display.innerHTML = "You have no chance left";
            randomNum = Math.floor((Math.random() * 100) + 1 );
        }
        
    }else if(randomNum == guess){
        display.style.color = "green";
        display.innerHTML = "Good job! You just wasted yout time :)";
    }else{
        display.style.color = "yellow";
        display.innerHTML = "Please enter a number";
    }
}









