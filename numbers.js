//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

function adder(x,y,z) {
  return x + y + parseInt(z)
  
}

adder(num10, one, string8)
//2. write a loop that will log only numbers divisible by 3 between 20 - 100
for (var i = 21; i < 100;i = i + 3) {
    console.log([i])
  }


//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];
function getSum(total, num) {
    return total + num;
   }
scores.reduce(getSum) 

// found the sum need to find a way to divide by scores.length