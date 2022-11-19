const fs = require('fs');
const inquirer = require('inquirer');


const overwatchDpsAgents = [
    'Ashe', 'Bastion', 'Echo', 'Genji', 'Hanzo', 'Junkrat', 'Cassidy', 'Mei', 'Pharah', 'Reaper', 'Sojourn', 'Soldier 76', 'Sombra', 'Symmetra', 'Torbjorn', 'Tracer', 'Widowmaker'
];


const overwatchSupportAgents = [
    'Ana', 'Baptiste', 'Brigitte', 'Kiriko', 'Lucio', 'Mercy', 'Moira', 'Zenyatta'
];


const overwatchTankAgents = [
    'D.Va', 'Doomfist', 'Junker Queen', 'Orisa', 'Reinhardt', 'Roadhog', 'Sigma', 'Winston', 'Wrecking Ball', 'Zarya'
];


const questions = [
    {
        name: "class",
        type: "list",
        message: "What class is this character?",
        choices: ["DPS", "Support", "Tank"]
    },
    {
        name: "Pick_Agent",
        type: "list",
        message: "What Agent do you want to counter?",
        choices: overwatchDpsAgents,
        when (answers) {
            return answers.class === "DPS"
        }
    },
    {
        name: "Pick_Agent",
        type: "list",
        message: "What Agent do you want to counter?",
        choices: overwatchSupportAgents,
        when (answers) {
            return answers.class === "Support"
        }
    },
    {
        name: "Pick_Agent",
        type: "list",
        message: "What Agent do you want to counter?",
        choices: overwatchTankAgents,
        when (answers) {
            return answers.class === "Tank"
        }
    }
];

//Have to create 35 conditions for each character counter

function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput);
    })
}


init();