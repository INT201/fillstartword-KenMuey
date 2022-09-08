const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  let concat = startWord+word
  if(word == undefined || word == null){
    return undefined;
  }
  else if(word.startsWith(startWord)){
    return word;
  }
  else if(!word.startsWith(startWord)){ //startsWith
    return concat;
  }
  
}
module.exports = fillStartWord
