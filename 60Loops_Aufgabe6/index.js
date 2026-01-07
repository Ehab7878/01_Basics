function main(){
let count = parseInt(prompt("How many numbers do you want to enter"))
let sum = 0

for(let i = 1; i <= count; i++){
    sum += parseInt(prompt("number " + i))
}
console.log(sum / count)
}
