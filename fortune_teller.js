
var fortune = 3
function yourFortune(fortune){
    if((fortune <= 3) && (fortune >= 0)){
        return 'Oh no! You selected a low fortune!';
    }
    else if((fortune > 3) && (fortune <= 7)){
        return 'You selected an average fortune';
    }
    else if((fortune > 7) && (fortune <= 10)){
        return 'Congratulations! You seleced great fortune.';
    }
    else{
        return 'It was hard to determine your fortune, try again!';
    }
}
console.log('Your fortune is ', fortune);
console.log(yourFortune(fortune));