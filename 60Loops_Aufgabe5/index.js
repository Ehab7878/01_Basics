function main(){
let a = parseInt(prompt("Number 1: ")) 
let b = parseInt(prompt("Number 2: "))
let sum = 0

for(let i = a + 1; i < b; i++){
    sum += i
}

console.log(sum)
}
main()