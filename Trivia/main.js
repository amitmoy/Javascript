var questionsController = (function(){
    

})();

var playerController = (function(){
    var money, level;
    money = 0;
    level = 1;

    return {
        getMoney: function(){
            return money;
        },
        
        addMoney: function(val){
            money+=val;
            return money;
        },

        getLevel: function(){
            return level;
        },

        setLevel: function(val){
            level = val;
        }
    }
})();

var UIController = (function(){
    
    
})();

var mainController = (function(questionsCtrl, playerCtrl, UICtrl){
    
})(questionsController, playerController, UIController);




/*
var Question = function(question, answers, rightAnswer){
    this.question = question;
    this.answers = answers;
    this.correct = rightAnswer;
}
var currentQuestion = new Question('press somthing?',['kabook','idkwhat to write','hazil','pressMe'],4);

init();

function onClick(elementId){
    var id = parseInt(elementId);
    console.log(id,currentQuestion.correct)
    if(id === currentQuestion.correct){
        document.querySelector('.question').innerText = 'Correct!';
        document.querySelector('.question').classList.add('tracking-in-expand-fwd');
    } else {
        document.querySelector('.question').innerText = 'Wrong!';
    }
}










function init(){
   // document.querySelector('.question').innerText = currentQuestion.question;
    document.getElementById('1').innerText = currentQuestion.answers[0];
    document.getElementById('2').innerText = currentQuestion.answers[1];
    document.getElementById('3').innerText = currentQuestion.answers[2];
    document.getElementById('4').innerText = currentQuestion.answers[3];
}*/