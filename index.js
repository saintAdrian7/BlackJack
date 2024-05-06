
let card1 = randomNumber()
let card2 =randomNumber() 
let myArray=[card1,card2]
let isAlive = true
let hasBlackJack = false

function start(){
    myArray = [];
    isAlive = true;
    hasBlackJack = false;
    sum = 0;
    let card1 = randomNumber();
    let card2 = randomNumber();
    myArray = [card1, card2];
    let person={
        name:"Adrian",
        chips: 400
    }
    document.getElementById("amount-el").textContent = person.name + ": " +"$ " + person.chips;
    
    render()
}
 
function render(){
    let sum = 0
    for(i=0; i < myArray.length ; i++){
   sum += myArray[i]
   
if(sum < 21){
    isAlive = true
    hasBlackJack = false
} else if(sum === 21){
    isAlive = false
   hasBlackJack = true
}else {
   isAlive = false
   hasBlackJack = false
}

}
if(isAlive == true){
   document.getElementById("display-el").textContent ="Draw a new card"
} else if(hasBlackJack === true){
    document.getElementById("display-el").textContent =" You have BlackJack!" 
}else{
    document.getElementById("display-el").textContent ="You are out of the game" 
}
    document.getElementById("card-el").textContent = "cards: "  + myArray; 
    document.getElementById("sum-el").textContent = "SUM: "  + sum
   
}


function draw(){
    if(isAlive == true && hasBlackJack == false){
    let sum = 0
    let card = randomNumber();
    myArray.push(card);
   render()
   }

}

function randomNumber(){
    return Math.floor(Math.random()* 13 + 1) 
   
 }

