const container = document.querySelector('.container')
let num = 1

for (i = 1; i<=100 ; i++ ){

    let number;

    if(i%3 == 0 && i%5 ==0){
        number = 'FrizzBuzz'
        number = `<div class = "box box-red"> ${number} </div>`
        /* altri metodi:
        number = "<div class = 'box box-red'>""+number+" "</div>"`
        number = '<div class = "box box-red">'+number+' '</div>'
        */
       // inoltre potevo al posto di mettere solo number = potevo scrivere dirrettamente container.innerHTML = `<div class = "box box-red"> ${number} </div>`

        // Sbagliato mettere ` avevo messo ' 
        // potevo lasciare i%3 == 0 aggiungendoci && i%5 !=0  e al secondo else if lasciare i%3 == 0 && i%5 ==0 
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
