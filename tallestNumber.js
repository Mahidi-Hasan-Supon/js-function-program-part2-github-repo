/* sob theke boro sonka;>>>
*function
*array use */ 

// const number5 = [45,54,875,9641,458];

// function maxNumber(numbers){
//     let max = numbers[0];
//     for(const num of numbers){
//         if(num > max){
//             max = num;
//         }
//     }
//     return max
// }

// const maxNumber1 = maxNumber(number5)

// console.log(maxNumber1)







// smallest  number in function
const number5 = [45,54,875,9641,458];

function minNumber(numbers){
    let min= numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        } 
    }
    return min
}

const minNumber1 = minNumber(number5)

console.log(minNumber1)
