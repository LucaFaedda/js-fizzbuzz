
for (i = 1; i<=100 ; i++ ){

    let number;

    if(i%3 == 0 && i%5 ==0){
        number = 'FizzBuzz'
        console.log(number)
        document.getElementById('box').innerHTML = 'FizzBuzz'
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
