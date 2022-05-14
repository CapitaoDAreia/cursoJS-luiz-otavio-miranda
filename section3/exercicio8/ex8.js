//Exercício 8
function FB(num){
    if(isNaN(num) == true){
        return num
    }else if(num%3 !== 0 && num%5 !== 0){
        return num
    }else if(num%3 === 0 && num%5 === 0){
        return "FizzBuzz"
    }else if(num%5 === 0){
        return 'Buzz'
    }else if(num%3 === 0){
        return "Fizz"
    }

    
}
for(let i =0; i <= 100; i++){
    console.log(FB(i))
}