let number1 = prompt("Gib die erste Zahl ein")
let number2 = prompt("Gib die zweite zahl ein")

let number1AsNumber = parseInt(number1)
let number2AsNumber = parseInt(number2)

let selection = prompt("1 Add, 2 Subract")
let selectionAsNumber = parseInt (selection)

let result = 0
if (selectionAsNumber == 1){
    let result = number1AsNumber + number2AsNumber
    console.log(result);
} else if(selectionAsNumber == 2){
    let result = number1AsNumber - number2AsNumber
    console.log(result);
    
}else{ 
    console.log("Not a valid selection")
}