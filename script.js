let compNum = 0;
let compScore = 0;
let userScore = 0;

function getScore(){

    if (compScore > userScore){
     alert("Sorry you lost. The computer had " + compScore + " points, you had " + userScore)  
    }else if (compScore < userScore){
     alert("You won! You had " + userScore + " points, the computer had " + compScore)  
    }else{
        alert("It's a tie! Both you and the computer had " + compScore + " points!")  
    }
    
    compScore = 0;
    userScore = 0;
    
}

//0 = Rock
//1 = Paper
//2 = Scissors

    

function rock(){
    compNum = Math.round(Math.random() * 2);
    if(compNum == 1){
            compScore += 1;
            alert("Lose: Paper beats Rock! The Computer chose Paper.");
        }else if(compNum == 2){
            userScore += 1;
            alert("Win: Rock beats Scissors! The Computer chose Rock!");
        }else{
            alert("It's a tie! Computer chose Rock!");
        }
    }

function paper(){
    compNum = Math.round(Math.random() * 2);
    if(compNum == 0){
            userScore += 1;
            alert("Win: Paper beats Rock! The Computer chose Rock.");
        }else if(compNum == 2){
            compScore += 1;
            alert("Lose: Scissors beats Paper! The Computer chose Scissors.");
        }else{
            alert("It's a tie! Computer chose Paper!");
        }
    }

function scissors(){
    compNum = Math.round(Math.random() * 2);
    if(compNum == 0){
            compScore += 1;
            alert("Lose: Rock beats Scissors! The Computer chose Rock.");
        }else if(compNum == 1){
            userScore += 1;
            alert("Win: Scissors beats Paper! The Computer chose Paper.");
        }else{
            alert("It's a tie! Computer chose Scissors!");
        }
    }

