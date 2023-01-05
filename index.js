var readlineSync=require(readlin-sync)
var score=0;
var userName=readlineSync.question("What's your name? ");
comsole.log("Welcome "+userName+" to DO YOU KNOW Rakesh? ");

//play Function

function play(question,answer)
{
    var userAnswer=readlinSync.question(question);
    if(userAnswer===answer)
    {
        console.log("Right");
        score++;
        console.log("current score: "+score);
        console.log("_________________")
    }
    else{
        console.log("Wrong");
        score--;
        console.log("current score: "+score);
        console.log("_________________")
    }
}
//arrya of object

var questions=[
    {
        question:"where do i live ",
        answer:"Ratlam",
    },
    {
        question:"who is my favorite hero? ",
        answer:"captain america",
    },
    {
        question:"what i used to play in college? ",
        answer:"table tanis",
    },
    {
        question:"Where my college is situated? ",
        answer:"ujjain",
    }
]

//loop
for(var i=0; i<questions.length; i++)
{
    var currentQuestion=questions[i];
    play(currentQuestion.question,currentQuestion.answer)
}