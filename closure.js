// const bank =owner =>{
//     balance =0;
//     return amount =>{
//         balance =balance + amount;
//         return balance;
//     }
// }
const bank = owner =>{
    balance =0;
    return {
        deposit:amount =>{
            balance =balance + amount;
            return  balance;
        },
        withdraw:amount =>{
            balance =balance - amount;
            return  balance;
        }
    }
    
}
const mafijBank = bank("mafij");
console.log(mafijBank.deposit(100));
console.log(mafijBank.deposit(300));
console.log(mafijBank.amount);
console.log(mafijBank.deposit(100));
console.log(mafijBank.deposit(100));
console.log(mafijBank.withdraw(100));
console.log(mafijBank.withdraw(300));