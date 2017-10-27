 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';

function iFixI(str){
    
      //WHAT DO I DO?????? first
      var out = ''  // 1. what do I want out?
    
      // 3. Solve the logic problem isolate standalone i and replace with I
      // look at every character in the string
      //
      // if the character == i and is there a space on both sides I
      // Edge cases: first character in the string and space as next?
      // Edge case: last character in str
      // str[0]   i went to the mall. i bought a pair of shoes
      
      for(var j = 0; j < str.length; j++){
        var character = str[j]
        var nextChar = str[j + 1]
        var prevChar = str[j - 1]
        var nextCases = [' ', "'", '.', ',', '!', '?']
    
      if(character == 'i' || character == 'I'){
        if(
           j == 0 ||
           prevChar == ' ' && nextCases.includes(nextChar)
        ){
             out += 'I'
           } else {
             out += 'i'
           }    } else {
                    console.log(character, j)
    
            out += str[j]
        }
      }
      return out // 2. return the out variable
    }
iFixI(sentence)

//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

function letterCount(sen, letter){
    output = 0
    sen = sen.toLowerCase()
    for (var i = 0; i < sen.length; i++) {
      sentence = sen[i]
    if(sentence == letter){
      output += 1
  }
    }
  return output
    
}
console.log(letterCounter(jsHistory, 'a'))

//3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
//I SCREAM, you SCREAM, we all SCREAM for icecream

var text = 'I scream, you scream, we all scream for icecream';

/* Loop through the string for the word 'scream'. Once 'scream is targeted use an if else statemnt to capitalize and than replace in the string*/

function screamCase(str){
    var output = ''
    for (var i = 0; i < str.length; i++) {
      var sentence = str[i]
      if(sentence == 'scream'){
        output += 'SCREAM'
      }
      else{
        output + str[i]
        console.log(str)
      }
    }
  return output
  } 
  
  console.log(screamCase(text))
  