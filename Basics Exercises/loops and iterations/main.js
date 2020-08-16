var jhonBills = {
    bills: [124,48,268,180,42],
    fixedBills: new Array(),
    calcFixedBills: function(){
        for(var i = 0; i < this.bills.length; i++){
            if(this.bills[i]<50){
                this.fixedBills.push(this.bills[i]*1.2);
            } else if(this.bills[i] >= 50 && this.bills[i] <= 200){
                this.fixedBills.push(this.bills[i]*1.15);
            } else {
                this.fixedBills.push(this.bills[i]*1.1);
            }
        }
    }
}

var markBills = {
    bills: [77,375,110,45],
    fixedBills: new Array(),
    calcFixedBills: function(){
        for(var i = 0; i < this.bills.length; i++){
            if(this.bills[i]<100){
                this.fixedBills.push(this.bills[i]*1.2);
            } else if(this.bills[i] >= 100 && this.bills[i] <= 300){
                this.fixedBills.push(this.bills[i]*1.1);
            } else {
                this.fixedBills.push(this.bills[i]*1.25);
            }
        }
    }
}

var calcAverage = function(array){
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum/array.length;
}

console.log(jhonBills.bills);
console.log(markBills.bills);
jhonBills.calcFixedBills();
markBills.calcFixedBills();
console.log(jhonBills.fixedBills);
console.log(markBills.fixedBills);

var averageJhon = calcAverage(jhonBills.fixedBills);
var averageMark = calcAverage(markBills.fixedBills);

if(averageJhon < averageMark){
    console.log('Mark\'s family paid ' + averageMark + ' which is more then Jhon\'s family ' + averageJhon);
} else if (averageJhon > averageMark) {
    console.log('Jhon\'s family paid ' + averageJhon + ' which is more then Mark\'s family ' + averageMark);
} else {
    console.log('Mark\'s and Jhon\'s families paid the same average bills ' + averageMark + ' ' + averageJhon);
}