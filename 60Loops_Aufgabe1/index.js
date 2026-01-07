function main(){
    let number = 0
    let number2 = 0
    for(let i = 1; i <= 100; i++){
        number2 += 1
        number += number2
    }
    console.log(number)
}
main()