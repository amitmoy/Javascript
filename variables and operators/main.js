// Variabels and operators exercise
var michaelWeight, michaelHeight, jhonWeight, jhonHeight;

michaelHeight = 1.83;
michaelWeight = 83;
jhonHeight = 1.77;
jhonWeight = 93;

var michaelBMI = michaelWeight/(michaelHeight*michaelHeight);
var jhonBMI = jhonWeight/(jhonHeight*jhonHeight);
var isMichaelBMIGreather = michaelBMI > jhonBMI;

console.log(michaelBMI, jhonBMI);
console.log(isMichaelBMIGreather);