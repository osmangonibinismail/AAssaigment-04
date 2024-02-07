
// function calculateMoney(ticketSale) {
    
//     if (ticketSale < 0 || typeof ticketSale !== 'number') {
//         return 'Invalid Number';
//     }
//     const perTicketPrice = 120; 
//     const securitySalary = 500;
//     const lunchCost = 50;
//     const worker = 8;
//     const totalLunchCost = lunchCost * worker;
//     const totalSell = perTicketPrice * ticketSale;
//     const totalCost = securitySalary + totalLunchCost;

//     return  totalSell - totalCost;
// }



// function checkName(name) {
//     if (typeof name !== 'string'){
//         return 'invalid';
//     }

//     const character = ['A', 'y', 'i', 'e', 'o', 'y', 'w'];

//     const toLowerCase = name.toLowerCase();
//     const characterLowerCase = toLowerCase.substr(-1);
//     if(character.includes(characterLowerCase)){
//         return 'Good Name';
//     }
//     return 'Bad Name';
// }

// function deleteInvalids(array) {
//     if(!Array.isArray(array)){
//         return 'Invalid input'
//     }
//     let numbers = [];
//     for (const arr of array) {
//         if(typeof arr === 'number' && !isNaN(arr)){
//             numbers.push(arr);
//         }
//     }
//     return numbers;
// }

// function password(obj) {
//     const{name, birthYear, siteName} = obj;

//     if(typeof birthYear !== 'number' || Object.keys(obj).length !== 3 ){
//         return 'invalid';
//     }
//     const firstElement = name.trim();
//     const secondElement = birthYear.toString();
//     const thirdElement = siteName.trim().charAt(0).toUpperCase() + siteName.slice(1).toLowerCase();
//     if(secondElement.length !== 4){
//         return 'invalid';
//     }
//     return thirdElement + "#" + firstElement + "@" + secondElement;
// }

funtion monthlySavings(totalPayment, livingCost) {
    if(Array.isArray !== totalPayments, livingCost) {
        return 'invalid input';
    }
}
console.log(monthlySaving([ 1000 , 2000 , 3000 ] , 5400));