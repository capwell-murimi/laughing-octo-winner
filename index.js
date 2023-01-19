let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let num = 0
let sum;
//COUNTER APPLICATION
function count(){
   num = num + 1
   countEl.innerText = num
   console.log(countEl.innerText)
}
function resetc(){
   num = 0
   countEl.textContent = 0
}
function save(){
   saveEl.innerText += countEl.innerText + "--"
} //to create total function() and add the function save()

//AGE CALCULATOR
let daysEl = document.getElementById("days-el")
let yearEl = document.getElementById("years-el")
//TO EXECUTE FUNCTIONS
function ageInDays(){
   let birthyear = prompt("Enter year of birth")
    let diff = ((2023-birthyear)*365)
   daysEl.innerText += diff
}
function ageInYears(){
   let zaliwa = prompt("Enter Year of Birth")
   let daff = 2023 - zaliwa
   yearEl.innerText += daff
}
function reset(){
   daysEl.innerText ="AGE IN DAYS:" + 0
   yearEl.innerText ="AGE IN YEARS: " + 0
}

//CHANGE THE THEME FOR ALL APPICATIONS
let bodyEl = document.querySelector('body');
let headingEl = document.querySelector('h1')
function lighttheme(){
   bodyEl.style.background = 'white'
   headingEl.style.color = 'black'
   daysEl.style.color = 'black'
   yearEl.style.color = 'red'
}
function darktheme(){
   headingEl.style.color = 'white'
   bodyEl.style.background = 'black'
   daysEl.style.color = 'yellow'
}
//BLACK JACK GAME
let dig1 = 10;
let dig2 = 13;
let digall = [dig1,dig2]
let ongeza = dig1 + dig2
let blackEl = document.getElementById("black-el")
let actionEl = document.getElementById("action")
let blackjacksumEL = document.getElementById("blackjacksum")
function startGame(){
    let suma = digall[0]  + " " + digall[1]
    blackEl.textContent = suma
    blackjacksumEL.textContent ="Sum:" + ongeza
    renderGame()
}
function addCard(){

}
function renderGame(){
   if(ongeza < 21){
       actionEl.textContent = "Do you want to draw again!"
   }
   else if(ongeza === 21){
       actionEl.textContent = "You got blackjack!"
   }
   else if(ongeza > 21){
       actionEl.textContent = "You loose"
   }
}