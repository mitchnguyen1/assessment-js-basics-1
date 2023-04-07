//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 
const myName = "Mitchell"
console.log("Name:",myName)
//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
const faveNum = 6
console.log("Favorite Number:", faveNum)

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
const lovesCode = true
console.log("LovesCode:", lovesCode)


//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
if(faveNum === 13){
  console.log("Lucky 13!")
}
else{
  console.log("Not Lucky 13")
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/


//CODE HERE
for(let i = 0; i < 5; i++){
  console.log(`${i} Print of Favorite Number: ${faveNum}`)
}