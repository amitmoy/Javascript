// if-else exercise

var mikesFirst,mikesSecond,mikesThird;
var jhonsFirst,jhonsSecond,jhonsThird;
var marysFirst,marysSecond,marysThird;

jhonsFirst = 89;
jhonsSecond = 120;
jhonsThird = 103;
mikesFirst = 116;
mikesSecond = 94;
mikesThird = 123;
marysFirst = 97;
marysSecond = 134;
marysThird = 105;

var mikesAverage, jhonsAverage, marysAverage, highest;
mikesAverage = (mikesFirst + mikesSecond + mikesThird)/3;
jhonsAverage = (jhonsFirst + jhonsSecond + jhonsThird)/3;
marysAverage = (marysFirst + marysSecond + marysThird)/3;

console.log('Jhon\'s average:' + jhonsAverage + ' Mike\'s average:' + mikesAverage + ' Mary\'s average:' + marysAverage);

if (mikesAverage > jhonsAverage){
    if(mikesAverage > marysAverage){
        console.log('Mike\'s average is highest');
    } else if (mikesAverage < marysAverage){
        console.log('Mary\'s average is highest');
    } else {
        console.log('Mike\'s and Mary\'s averages are both highest');
    }
} else if (mikesAverage < jhonsAverage){
    if(mikesAverage > marysAverage){
        console.log('Jhon\'s average is highest');
    } else if (mikesAverage < marysAverage){
        console.log('Mary\'s average is highest');
    } else {
        console.log('Jhon\'s and Mary\'s averages are both highest');
    }
} else {
    if(marysAverage > mikesAverage){
        console.log('Mary\'s average is highest');
    } else {
        console.log('All have the same average');
    }
}