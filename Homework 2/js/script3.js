function generateRandomNumber(){
    return parseInt(Math.random()*10)
}

let randomP1 = generateRandomNumber()
let randomP2 = generateRandomNumber()
console.log(`${randomP1} || ${randomP2}`)

do{
    randomP1 = generateRandomNumber()
    randomP2 = generateRandomNumber()
    console.log(`${randomP1} || ${randomP2}`)
    if(randomP1 == 3 && randomP2 ==3){
        console.log("Both rolled 3")
        break
    }else if(randomP1 == 3){
        console.log("Player A rolled 3")  
        break
    }else if(randomP2 == 3){
        console.log("Player B rolled 3")
        break
    }
}while(randomP1 != 3 || randomP2 !=3)