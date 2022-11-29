const container = document.querySelector('.container')
let num = 1

for (i = 1; i<=100 ; i++ ){

    let number;

    if(i%3 == 0 && i%5 ==0){
        
        number = `<div class = "box box-red"> ${number} </div>`
    }
    else if(i%5 == 0){
        number = 'Buzz'
        number = `<div class = "box box-green"> ${number} </div>`
    }
    else if(i%3 == 0 ){
        number = 'Fizz'
        number = `<div class = "box box-yellow">  ${number} </div>`
    }
    else{
        number = `<div class = "box box-orange">${i} </div>`
    }
    container.innerHTML += number
}
