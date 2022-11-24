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
        name: "agent",
        type: "list",
        message: "What Agent do you want to counter?",
        choices: overwatchDpsAgents,
        when (answers) {
            return answers.class === "DPS"
        }
    },
    {
        name: "support",
        type: "list",
        message: "What Agent do you want to counter?",
        choices: overwatchSupportAgents,
        when (answers) {
            return answers.class === "Support"
        }
    },
    {
        name: "tank",
        type: "list",
        message: "What Agent do you want to counter?",
        choices: overwatchTankAgents,
        when (answers) {
            return answers.class === "Tank"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Ashe: Genji, Tracer, Echo, Soldier 76, Sombra.",
        when (answers) {
            return answers.agent === "Ashe"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Bastion: Junkrat, Pharah, Zarya, Ana, Roadhog",
        when (answers) {
            return answers.agent === "Bastion"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Echo: Soldier 76, Cassidy, Ashe, Widowmaker, Roadhog",
        when (answers) {
            return answers.agent === "Echo"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Genji: Zarya, Symmetra, Moira, Winston, Mei.",
        when (answers) {
            return answers.agent === "Genji"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Hanzo: Tracer, Pharah, Lucio, Wrecking Ball, Genji, D.Va.",
        when (answers) {
            return answers.agent === "Hanzo"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Junkrat: Reaper, Cassidy, Soldier 76, Tracer, Pharah, Echo, Lucio, Zarya.",
        when (answers) {
            return answers.agent === "Junkrat"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Mei: Sombra, Pharah, Echo.",
        when (answers) {
            return answers.agent === "Mei"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Pharah: Soldier 76, Cassidy, Ashe, Widowmaker, Sombra.",
        when (answers) {
            return answers.agent === "Pharah"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Reaper: Pharah, Widowmaker, Echo, Ana, Junkrat.",
        when (answers) {
            return answers.agent === "Reaper"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Sojourn: Genji, Tracer, Pharah, Echo, Lucio.",
        when (answers) {
            return answers.agent === "Sojourn"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Soldier 76: Pharah, Junkrat, Roadhog, Cassidy.",
        when (answers) {
            return answers.agent === "Soldier 76"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Sombra: Pharah, Junkrat, Winston, Hanzo.",
        when (answers) {
            return answers.agent === "Sombra"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Symmetra: Junkrat, Pharah, Echo, Winston.",
        when (answers) {
            return answers.agent === "Symmetra"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Cassidy: Genji, Reinhardt, Winston.",
        when (answers) {
            return answers.agent === "Cassidy"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Torbjorn: Pharah, Junkrat, Echo, Sombra",
        when (answers) {
            return answers.agent === "Torbjorn"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Tracer: Symmetra, Moira, Winston, Torbjorn",
        when (answers) {
            return answers.agent === "Tracer"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Widowmaker: Genji, Tracer, Widowmaker, Ashe, Zenyatta.",
        when (answers) {
            return answers.agent === "Widowmaker"
        }
    },
    {
        name: "results",
        message: "Here is the counters to D.Va: Zarya, Symmetra, Moira, Winston, Junkrat, Pharah.",
        when (answers) {
            return answers.tank === "D.Va"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Doomfist: Widowmaker, Ashe, Bastion, Ana, Tracer, Genji, Sombra.",
        when (answers) {
            return answers.tank === "Doomfist"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Junker Queen: Wrecking Ball, Lucio, Widowmaker, Ana.",
        when (answers) {
            return answers.tank === "Junker Queen"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Orisa: Symmetra, Moira, Winston, Zarya, Doomfist.",
        when (answers) {
            return answers.tank === "Orisa"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Reinhardt: Sombra, Cassidy, Ana, Mei, Junkrat, Pharah.",
        when (answers) {
            return answers.tank === "Reinhardt"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Roadhog: Pharah, Junkrat, Zarya, Echo, Genji, Sombra, Doomfist, Wrecking Ball, Roadhog, Widowmaker, Ana.",
        when (answers) {
            return answers.tank === "Roadhog"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Sigma: Lucio, Genji, Tracer, Sombra.",
        when (answers) {
            return answers.tank === "Sigma"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Winston: Junkrat, Pharah, Zarya, Ana, Mei, Doomfist.",
        when (answers) {
            return answers.tank === "Winston"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Wrecking Ball: Mei, Ana, Roadhog.",
        when (answers) {
            return answers.tank === "Wrecking Ball"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Zarya: Junkrat, Pharah, Echo, Bastion, Genji, D.Va.",
        when (answers) {
            return answers.tank === "Zarya"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Ana: Genji, Echo, Pharah, Doomfist, Tracer.",
        when (answers) {
            return answers.support === "Ana"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Baptiste: Genji, Tracer, Hanzo, Lucio, Echo, Pharah, Sombra.",
        when (answers) {
            return answers.support === "Baptiste"
        } 
    },
    {
        name: "results",
        message: "Here is the counters to Brigitte: Pharah, Echo, Junkrat.",
        when (answers) {
            return answers.support === "Brigitte"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Kiriko: Tracer, Genji, Lucio, Pharah, Echo, Soldier 76.",
        when (answers) {
            return answers.support === "Kiriko"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Lucio: Soldier 76, Cassidy, Ashe, Symmetra, Winston, Moira, Torbjorn turrent, Roadhog, Mei, Sombra.",
        when (answers) {
            return answers.support === "Lucio"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Mercy: Cassidy, Ashe, Widowmaker, Soldier 76, Genji, Winston, Tracer, Symmetra.",
        when (answers) {
            return answers.support === "Mercy"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Moira: Junkrat, Pharah, Echo, Ana, Mei, Roadhog, Ashe, Widowmaker.",
        when (answers) {
            return answers.support === "Moira"
        }
    },
    {
        name: "results",
        message: "Here is the counters to Zenyatta: Junkrat, Pharah, Widowmaker, Ashe, Cassidy, Kiriko, Hanzo, Zenyatta.",
        when (answers) {
            return answers.support === "Zenyatta"
        }
    }

];
//Add counters to tank characters now

// Maybe create a switch statement for the agents and log their counters

function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput);
    })
}


init();