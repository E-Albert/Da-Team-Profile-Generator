//acquiring manager class
const Manager = require("./lib/Manager");
//acquiring engineer class
const Engineer = require("./lib/Engineer");
//acquiring intern class
const Intern = require("./lib/Intern");
//used to prompt questions to user
const inquirer = require("inquirer");
const path = require("path");
//used to generate file with user input
const fs = require("fs");
//acquiring generatePage function
const generatePage = require("./src/html-template");
//empty array to push completed worker profiles in
let workers = [];


//Creates the first team member which is the manager
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
            });
    }

    createManager();
}



//directory prompt which asks the user what they want to do next
function employeeMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "picker",
                message: "Which position would you like to create?",
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
                        generateProfiles(workers);
                        break;
                }
            
        });
}

//creates engineer profile
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
        });
}

//creates intern profile
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
        });
}


function generateProfiles(workers) {

    const profileContent = generatePage(workers);


    fs.writeFile('./dist/currentEmployees.html', profileContent, (err) => {
        err ? console.log(err) : console.log('Congratulations, your employee webpage has been created!');
    });

}



menu();