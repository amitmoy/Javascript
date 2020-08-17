var Question = function(question, answers, rightAnswer){
    this.question = question;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
}

init();


function init(){
    document.querySelector('.question').innerText = 'What was the first?';
}