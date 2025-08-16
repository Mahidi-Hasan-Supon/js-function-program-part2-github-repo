/* 
chair -----> 3 cft
table >>>>>10cft
bed --------->50crt
*/
function woodQuantity(chairWood,tableWood,bedWood){
    const perChairWood = 3;
    const perTableWood = 10; 
    const perBedWood = 50; 
    
    const totalChairWood = perChairWood * chairWood; 
    const totalTableWood = perTableWood * tableWood; 
    const totalBedWood = perBedWood * bedWood; 

    const totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;

} 

const wood = woodQuantity(0 , 2 , 2)
console.log(wood)





/* 
*shirt price = 500;
*pant price = 300;
*shoi price = 900;
*/


function shoppingPrice(shirt,pant,shoi){
    const oneShirtPrice = 500;
    const onePantPrice  = 300;
    const oneShoiPrice = 900;
    
    const totalShirtPrice = shirt * oneShirtPrice;
    const totalPantPrice = pant * onePantPrice;
    const totalShoiPrice = shoi * oneShoiPrice;
    const totalPrice = totalShirtPrice + totalPantPrice + totalShoiPrice;
    return   totalPrice;

}

const price = shoppingPrice(3,3,3);
console.log(price);



