var words = ['This ', 'is ', 'JavaScript ', 'Coding!'];
var sentence = '';
function createSentence(words){
    for(let i=0;i<4;i++){
        sentence += words[i];
    }
    return sentence;
}
console.log(createSentence(words));
