const question = document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-description"));

const quesHeadCntr=document.getElementById("questionRatio");
const scoreCntr=document.getElementById("score");


let currentQues={};
let acceptingAns=false;
let score=0;
let quesCounter=0;
let quesAttempted=0;
let leftOverQues=[];
let questionList=[
    {
        question:"Who Invented the 3-D printer?",
        choice1:"Nick Holonyak",
        choice2:"Elias Howe",
        choice3:"Chuck Hull",
        choice4:"Christiaan Huygens",
        answer: 3
    },
    {
        question:"The Grand Canyon located in which country?",
        choice1:"Ghana",
        choice2:"US",
        choice3:"Canada",
        choice4:"Bolivia",
        answer: 2
    },
    {
        question:"The full form of DOM is?",
        choice1:"Document Oriented Memory",
        choice2:"Document Object Model",
        choice3:"Document Object Memory",
        choice4:"None of The Above",
        answer: 2
    },
    {
        question:" Identify the language which is mainly used for Artificial Intelligence",
        choice1:"Java",
        choice2:"J2EE",
        choice3:"Prolog",
        choice4:"C",
        answer: 3
    }
];

const MAX_QUESTION=4;


startGame = () => {
    quesCounter=0;
    score=0;
    leftOverQues=[ ... questionList];
    getQuestionRandomly();
};

getQuestionRandomly = () => {
    if(leftOverQues.length===0 || quesCounter > MAX_QUESTION) {
        localStorage.setItem("mostRecentScore",score);
        return window.location.assign("./endPage.html");

    }
    quesCounter++;
    const quesIdx=Math.floor(Math.random()*leftOverQues.length);
    currentQues=leftOverQues[quesIdx];
    question.innerText=currentQues.question;
    
    choices.forEach(choice =>{
        const number=choice.dataset["number"];
        choice.innerText=currentQues["choice"+number];
    });

    leftOverQues.splice(quesIdx,1);
    acceptingAns="true";

};

choices.forEach(choice => { 
    choice.addEventListener('click', ev =>{
        if (!acceptingAns) return;

        acceptingAns=false;
        const selectedOption=ev.target;
        const selectedActualRes=selectedOption.dataset["number"];

        const correctClassToDetermine = selectedActualRes==currentQues.answer ? "correct":"incorrect";
        if (correctClassToDetermine==="correct") {
            score=score+1
            scoreCntr.innerText=score;
        }
        
        selectedOption.parentElement.classList.add(correctClassToDetermine);

        quesAttempted=quesAttempted+1
        quesHeadCntr.innerHTML=quesAttempted+"/4"

        setTimeout( () =>{
            selectedOption.parentElement.classList.remove(correctClassToDetermine);
            getQuestionRandomly();

        },800);
        
    });
    
});

startGame();







