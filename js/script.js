const container = document.querySelector('.container')
let num = 1

for (i = 1; i<=100 ; i++ ){

    let number;

    if(i%3 == 0 && i%5 ==0){
        number = '<div class = "box box-red"> FrizzBuzz </div>'
    }
    else if(i%5 == 0){
        number = 'Buzz'
        number = '<div class = "box box-green"> Buzz </div>'
    }
    else if(i%3 == 0 ){
        number = 'Fizz'
        number = '<div class = "box box-yellow"> Frizz </div>'
    }
    else{
        number = i
        number = '<div class = "box box-orange">${i} </div>'
    }
    container.innerHTML += number
}
