function bank(taka) {
    var prebal = 500;
    console.log('My current blance: ', prebal);
    console.log('I will deposite :', taka, " TAKA");

    var balance = prebal + taka;
    return balance;
}
var deposite = 550;
var acc = bank(deposite);
console.log('Now balance is : ', acc);