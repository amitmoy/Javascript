var bills = [124,48,268];

function tipCalculator(bill){
    if (bill <= 50)
    {
        return bill*1.2; // add 20%
    } else if (bill <= 200 && bill > 50) {
        return bill*1.15; // add 15%
    } else {
        return bill*1.1;
    }
}

var fixedBills = new Array();
fixedBills.push(tipCalculator(bills[0]));
fixedBills.push(tipCalculator(bills[1]));
fixedBills.push(tipCalculator(bills[2]));
console.log(fixedBills);