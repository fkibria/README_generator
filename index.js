const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")


// array of questions for user
const questions = [
{
    type:"input",
    name:"title",
    message:"What would you like to call your project?",
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
},
{
    type:"input",
    name:"overview",
    message:"Describe your project",
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
},
{
    type:"input",
    name:"installation",
    message:"How do you use your app?",
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
},
{
    type:"input",
    name:"criteria",
    message:"List criteria for acceptance",
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
},
{
    type:"input",
    name:"license",
    message:"What license did you use?",
},
{
    type:"input",
    name:"deployed",
    message:"Please include link to deployed app",
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
},
{
    type:"input",
    name:"github",
    message:"Enter your github",
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
},
{
    type:"input",
    name:"screenshots",
    message:"Enter link to screenshot",

},
];

// function to write README file
function writeToFile(data) {
    fs.writeFileSync("newREADME.md", data)
    console.log("success!")
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then((response)=>{
writeToFile(generateMarkdown(response))
})
}

// function call to initialize program
init();
