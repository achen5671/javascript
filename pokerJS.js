// JavaScript File
let display = document.getElementById('result');
let display1 = document.getElementById('result1');

let flush = document.getElementById('end');
let flush1 = document.getElementById('end1');

var shape = ['Spade' , 'Club' , 'Heart' , 'Diamond'];
var number = ['1', '2', '3' , '4' ,'5' ,'6' ,'7' ,'8' ,'9' ,'10', 'Jack' , 'Queen', 'King', 'Ace'];
var i;

// Player One
function playerOneDraw(){
    var Spade = 0; 
    var Club = 0;
    var Heart = 0;
    var Diamond = 0;
    
    for(i = 0 ;  i < 5; i++){
        var randShape = shape[Math.floor(Math.random() * shape.length)];
        var randNumber = number[Math.floor(Math.random() * number.length)];
        switch(randShape){
            case "Spade":
                Spade++;
                break;
            case "Club": 
                Club++;
                break;
            case "Diamond":
                Diamond++;
                break;
            case "Heart": 
                Heart++;
                break;
        }
        display.style.color = "Black";
        display.innerHTML += randNumber + " of " + randShape + "<br>";
        
        
        // Flush
        if(Heart == 5 || Spade == 5 || Diamond == 5 || Club == 5){
            flush.style.color = "Green";
            flush.innerHTML = "Flush";
        }
        
        //Full House
        else if(Heart == 3 && (Spade == 2 || Diamond == 2 || Club == 2)){
            flush.style.color = "purple";
            flush.innerHTML = "Full House";
        }
        else if(Spade == 3 && (Heart == 2 || Diamond == 2 || Club == 2)){
            flush.style.color = "purple";
            flush.innerHTML = "Full House";
        }
        else if(Diamond == 3 && (Spade == 2 || Heart == 2 || Club == 2)){
            flush.style.color = "purple";
            flush.innerHTML = "Full House";
        }
        else if(Club == 3 && (Spade == 2 || Diamond == 2 || Heart == 2)){
            flush.style.color = "purple";
            flush.innerHTML = "Full House";
        }
        
        //3 of a kind
        else if(Heart == 3 || Spade == 3 || Diamond == 3 || Club == 3){
            flush.style.color = "orange";
            flush.innerHTML = "3 Of A Kind";
        }
        // None
        else{
            flush.style.color = "red";
            flush.innerHTML = "Unlucky";
        
        }
    }
    
    
}


// Player Two

function playerTwoDraw(){
    var Spade1 = 0; 
    var Club1 = 0;
    var Heart1 = 0;
    var Diamond1 = 0;
    
    for(i = 0 ;  i < 5; i++){
        var randShape1 = shape[Math.floor(Math.random() * shape.length)];
        var randNumber1 = number[Math.floor(Math.random() * number.length)];
        switch(randShape1){
            case "Spade":
                Spade1++;
                break;
            case "Club": 
                Club1++;
                break;
            case "Diamond":
                Diamond1++;
                break;
            case "Heart": 
                Heart1++;
                break;
        }
        display1.style.color = "Black";
        display1.innerHTML += randNumber1 + " of " + randShape1 + "<br>";
        
        
        // Flush
        if(Heart1 == 5 || Spade1 == 5 || Diamond1 == 5 || Club1 == 5){
            flush1.style.color = "Green";
            flush1.innerHTML = "Flush";
        }
        
        //Full House
        else if(Heart1 == 3 && (Spade1 == 2 || Diamond1 == 2 || Club1 == 2)){
            flush1.style.color = "purple";
            flush1.innerHTML = "Full House";
        }
        else if(Spade1 == 3 && (Heart1 == 2 || Diamond1 == 2 || Club1 == 2)){
            flush1.style.color = "purple";
            flush1.innerHTML = "Full House";
        }
        else if(Diamond1 == 3 && (Spade1 == 2 || Heart1 == 2 || Club1 == 2)){
            flush1.style.color = "purple";
            flush1.innerHTML = "Full House";
        }
        else if(Club1 == 3 && (Spade1 == 2 || Diamond1 == 2 || Heart1 == 2)){
            flush1.style.color = "purple";
            flush1.innerHTML = "Full House";
        }
        
        //3 of a kind
        else if(Heart1 == 3 || Spade1 == 3 || Diamond1 == 3 || Club1 == 3){
            flush1.style.color = "orange";
            flush1.innerHTML = "3 Of A Kind";
        }
        // None
        else{
            flush1.style.color = "red";
            flush1.innerHTML = "Unlucky";
        
        }
    }
    
    
}
