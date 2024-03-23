const question = [
    {
        question: "Which is the worst college in Tamilnadu?",
        answers:[
            {text: "PSG" ,correct: false},
            {text: "CIT" ,correct: false},
            {text: "MKCE" ,correct: true},
            {text: "MIT" ,correct: false},
        ]
    },
    {
        question: "National bird of india is?",
        answers:[
            {text: "Peacock" ,correct: true},
            {text: "Tiger" ,correct: false},
            {text: "Parrot" ,correct: false},
            {text: "Crow" ,correct: false},
        ]
    },
    {
        question: "National animal of india is?",
        answers:[
            {text: "Lion" ,correct: false},
            {text: "Elephant" ,correct: false},
            {text: "Tiger" ,correct: true},
            {text: "Donkey" ,correct: false},
        ]
    }
];

const Question =document.getElementById("ques");
const ans=document.getElementById("ans-btn");
const nextbtn=document.getElementById("last");

let currentIndex= 0;
let score= 0;

function Start(){
    currentIndex=0;
    score=0;
    nextbtn.innerHTML="Next";
    showQues();
}

function showQues(){
    resetState();
     let currQues = question[currentIndex];
     let quesNo= currentIndex+1;
     ques.innerHTML= quesNo + ". " +currQues.question;

     currQues.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ans.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
     });
}


function resetState(){
    nextbtn.style.display = "none";
    while(ans.firstChild){
        ans.removeChild(ans.firstChild);
    }   
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(ans.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextbtn.style.display = "block";
}


function showScore(){
    resetState();
    ques.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}


function handleNextbtn(){
    currentIndex++;
    if(currentIndex < question.length){
        showQues();
    }
    else{
        showScore();
    }
}

nextbtn.addEventListener("click", ()=>{
    if(currentIndex < question.length){
        handleNextbtn();
    }
    else{
        Start();
    }
});

Start();
