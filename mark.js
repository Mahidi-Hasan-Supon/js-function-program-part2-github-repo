// je besi number paibe she puruskar pabe<<>>>>>
const myNumber = 50;
const friendsNumber = 70;

if(myNumber > friendsNumber){
    console.log("you got a strawbary");

}

else{
    console.log("you are loser")
}


// function realitat

function number(num1,num2){
    if(num1>num2){
        return num1;
    }else{
        return num2;
    }
}

const num = number(20,10)
console.log(num)


const jim = 50;
const rim = 60;
const kim = 70;
if(jim>kim && jim >rim){
    console.log("jim the boss")
}
else if(rim>kim && rim>jim){
    console.log("rim the boss")
}
else{
    console.log("kim the boss")
}

// function diye

function numbers(number1,number2,number3){
    if(number1>number2 && number1>number3){
        return number1;
    }
    else if(number2>number1 && number2>number3){
        return number2;
    }else{
        return number3
    }
}

const result = numbers(20,50,80);
console.log(result)