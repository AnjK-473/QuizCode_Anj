const username=document.getElementById("username");
const saveBtn=document.getElementById("saveButton");
const ScoreToDisplay=document.getElementById("finalscore");
const mostRecentScore=localStorage.getItem("mostRecentScore");

ScoreToDisplay.innerText = mostRecentScore

username.addEventListener("keyup",() => {
    saveBtn.disabled = !username.value;
});

saveBtn.addEventListener("click",() =>{
    if(mostRecentScore<2){
        alert ( username.value + " ....Better Luck--Next Time!!")
    }
    else if(mostRecentScore<4){
        alert ("Good Game.. " + username.value )}
    else if(mostRecentScore==4){
        alert ("Congratulations!!! "+ username.value + " for winning this game")
    }
    });





