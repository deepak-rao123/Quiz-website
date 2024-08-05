
const quizData = [
{
    question:"Which type of JavaScript language is ___",
 option:[
    "Object-Oriented",
"Object-Based",
"Assembly-language",
"High-level",
],
correct: 1,

},

{question: "Which one of the following also known as Conditional Expression:",
option:
["Alternative to if-else",
"Switch statement",
"If-then-else statement",
"immediate if",
],
correct: 3,
},
 {question: 
    "In JavaScript, what is a block of statement?",
option:
["Conditional block",
"block that combines a number of statements into a single compound statement",
" both conditional block and a single statement",
" block that contains a single statement",
],
correct: 1,
},
{
 question:"When interpreter encounters an empty statements, what it will do:",
option:[
"Shows a warning",
"Prompts to complete the statement",
" Throws an error",
" Ignores the statements",
],
correct:3 ,
},

{
    question: "The function and  var are known as:",
option:
["Keywords",
"Data types",
" Declaration statements",
],
correct: 2,
},


{
    
 question:"Which one of the following is the correct way for calling the JavaScript code?",
option:
["Preprocessor",
"Triggering Event",
"RMI",
"Function/Method",
],
correct:3 ,
},

{
question: 
"Which of the following type of a variable is volatile?",
option:[
"Mutable variable",
"Dynamic variable",
"Volatile variable",
"Immutable variable",
],
correct: 0,
},
{question: 
    "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
option:[
"Prints an exception error",
"Prints an overflow error",
"Displays Infinity",
"Prints the value as such",
],
correct:2 ,
},

 {
    question: 
    "In the JavaScript, which one of the following is not considered as an error:",
option:[
"Syntax error",
"Missing of semicolons",
"Division by zero",
" Missing of Bracket",
],

correct: 2,
},
];


//javascript


const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4 ] =
 document.querySelectorAll("#question, .option_1,.option_2,.option_3,.option_4");



const submitBtn = document.getElementById("submit");
const currentQuiz = 0;
const score = 0;


// load quiz Function

const loadQuiz = ()=>{
  const{question, option}= quizData[currentQuiz];
  console.log(question);
  
  console.log(option);

  questionElm.innerText= question;
  option.forEach(
    (curOption, index)=>(window[`option_${index +1 }`].innerText = curOption)

);


};
loadQuiz();

// Get selected answer Function on button click



