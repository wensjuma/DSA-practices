//count words in a sentence
function countWords(){
    let words ='are you coming with me'
    let counter = 0
    for(let i = words.length -1; i>=0; i--){
      // console.log(words[i])
      if(words[i]==' ' || i==0){
        
         counter += 1
      }
    }
    return counter
  }
  console.log(countWords());
  
  //reverse words in a sentence
  function reverseWords(words){
   let res = []
   let wordLength = 0
   for(let i = words.length-1; i>=0; i--){
     
     if(words[i] == ' ' || i == 0){
        res.push(words.substr(i, wordLength +1 ));
        wordLength = 0;
     }else{
        wordLength++
     }
   }
   return res.join(' ');
  }
  
  console.log(reverseWords('are you coming with me'));
  