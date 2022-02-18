const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
let workers = [];



menu = () => {
    createManager = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter the managers name",

                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the team manager's id?",
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the team manager's email?"
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the team manager's office number?",
                }

            ])
            .then(({ name, id, email, officeNumber }) => {
                const manager = new Manager(name, id, email, officeNumber);
                console.log(manager);
                workers.push(manager);
                employeeMenu();
                //call another inquirer prompt
            });
    }

    createManager();
}

menu();

function employeeMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "picker",
                message: "Pick an option",
                choices: ["Engineer", "Intern", "Quit"]

            },
            
        ])
            .then(({picker}) => {
                console.log(picker);

                switch (picker) {
                    case "Engineer": 
                        createEngineer();
                        break;
                        
                    case "Intern":
                        createIntern();
                        break;
                    
                    default: 
                        console.log(workers);
                        generateProfiles();
                        break;
                }
            //call another inquirer prompt
        });
}

createEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the Engineer's name",

            },
            {
                type: "input",
                name: "id",
                message: "What is the team Engineer's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the team Engineer's email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the team Engineer's github?",
            }

        ])
        .then(({ name, id, email, github }) => {
            const newEngineer = new Engineer(name, id, email, github);
            console.log(newEngineer);
            workers.push(newEngineer);
            employeeMenu();
            //call another inquirer prompt
        });
}

createIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the Intern's name",

            },
            {
                type: "input",
                name: "id",
                message: "What is the Intern's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the Intern's email?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the Intern's school?",
            }

        ])
        .then(({ name, id, email, school }) => {
            const newIntern = new Intern(name, id, email, school);
            console.log(newIntern);
            workers.push(newIntern);
            employeeMenu();
            //call another inquirer prompt
        });
}

function generateProfiles(workers) {
    
    let workerHtml = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees</title>
</head>
<body>
    ${cardGenerator()}
    
</body>
</html>
    `


    fs.writeFileSync('./dist/currentEmployees.html', workerHtml)

}

generateProfiles();

function cardGenerator() {
    let cards = "";
    
    for (var i = 0; i < workers.length; i++) {
        currentWorker = workers[i]

        let cardName = `<h2>${currentWorker.name}</h2>
                        <p>${currentWorker.getRole()}</p>
                        <p>${differentCatergory(currentWorker)}</p>`
        cards += cardName;
    
    }
    console.log(cards);
    return cards;
}

function differentCatergory(currentWorker) {
    let role = currentWorker.getRole();

    if (role === "Manager") {
        return `Office Number: ${currentWorker.getOfficeNumber()}`;
    } else if (role === "Intern") {
        return `School: ${currentWorker.getSchool()}`;
    } else {
        return `Github: ${currentWorker.getGithub()}`;
    }
}