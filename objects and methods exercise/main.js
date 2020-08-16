var jhon = {
    fullName: 'Jhon Smith',
    mass: 83,
    hegith: 1.78,
    calculateBmi: function(){
        return this.mass*(this.hegith*this.hegith)
    }
}

var mike = {
    fullName: 'Mike Smith',
    mass: 90,
    hegith: 1.92,
    calculateBmi: function(){
        return this.mass*(this.hegith*this.hegith)
    }
}

var BMImike = mike.calculateBmi();
var BMIjhon = jhon.calculateBmi();

if(BMIjhon < BMImike){
    console.log('Mike\'s BMI is Greater ' + BMImike + ' ' + BMIjhon);
} else if(BMIjhon > BMImike){
    console.log('Jhon\'s BMI is Greater ' + BMImike + ' ' + BMIjhon);
} else {
    console.log('BMIs are equal ' + BMImike + ' ' + BMIjhon);
}