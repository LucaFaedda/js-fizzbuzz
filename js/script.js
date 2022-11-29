const container = document.querySelector('.container')


for (i = 1; i<=100 ; i++ ){

    let number;

    if(i%3 == 0 && i%5 ==0){
        number = '<div class = "box box-red"> ${FrizzBuzz}</div>'
        
    }
    else if(i%5 == 0){
        number = 'Buzz'
        console.log(number)
    }
    else if(i%3 == 0 ){
        number = 'Fizz'
        console.log(number)
    }
    else{
        number = i
        console.log(number)
    }
}
