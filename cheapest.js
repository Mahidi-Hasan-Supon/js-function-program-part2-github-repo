const mobilePhones=[
    {name:"samsung",price:20000,color:'wihit',camera:"15Mp"},
    {name:"iphone",price:100000,color:'wihit',camera:"15Mp"},
    {name:'xoami',price:30000,color:'wihit',camera:"15Mp"},
    {name:'redmi',price:10000,color:'wihit',camera:"15Mp"},
    {name:'oppo',price:24000,color:'wihit',camera:"15Mp"},
    {name:'vivo',price:15000,color:'wihit',camera:"15Mp"},
    {name:'walton',price:22000,color:'wihit',camera:"15Mp"}
]


function cheapestMinMobilePhones(phones){
    let min=phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
   
    }
    return min;
}

// const cheap= cheapestMinMobilePhones(mobilePhones)
// console.log(cheap)



// max prize sonkha<<<<>>>>>>>>
function maxMobilePrice(prices){
    let max=prices[0];
    
    for(const price of prices){
        if(price.price > max.price){
            max = price;
        }
    }
    return max;
}
const maxCheap=maxMobilePrice(mobilePhones)
console.log(maxCheap)