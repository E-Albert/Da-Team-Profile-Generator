const Manager = require("../lib/Manager");

function generatePage(workers) {
    return `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--Bulma Link-->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
    />
    <!--Stylesheet-->
    <link rel="stylesheet" href="../dist/stylesheet.css">
    <title>Employee Roster</title>
  </head>
  <body>
    <!--Hero-->
    <div class="hero is-small is-primary">
      <div class="hero-body">
        <p class="title">Employees</p>
      </div>
    </div>
    <!--Card container-->
    <div class="cardContainer">
            
            ${workers.map(element => 
              cardGenerator(element)
            ).join("")}
           
       
    </div>
  </body>
</html>`


    
}

function cardGenerator(workers) {

    if (workers.getRole() === "Manager") {
      return `<div class="card">
                <h4>${workers.getRole()}</h4>
                <p>${workers.name}
                <p>${workers.id}<p>
                <p>${workers.email}<p>
                <p>${workers.getOfficeNumber()}<p>
              </div>`
                
    } else if (workers.getRole() === "Engineer") {
      return `<div class="card">
                <h4>${workers.getRole()}</h4>
                <p>${workers.name}
                <p>${workers.id}<p>
                <p>${workers.email}<p>
                <p>${workers.getGithub()}<p>
              </div>`

    } else {
      return `<div class="card">
                <h4>${workers.getRole()}</h4>
                <p>${workers.name}
                <p>${workers.id}<p>
                <p>${workers.email}<p>
                <p>${workers.getSchool()}<p>
              </div>`
  }

    // let work = workers;
    // let cardContext = "";
    
    // for (var i = 0; i < work.length; i++) {
    //     currentWorker = work[i]
        
    //     let card = document.createElement('div')
    //     let cardContext = `<h2>${currentWorker.name}</h2>
    //                     <p>${currentWorker.getRole()}</p>
    //                     <p>${differentCatergory(currentWorker)}</p>`
    //     card += cardContext;
        



    // }
    // console.log(card);
    // return card;
}


function differentCatergory(workers) {
    let role = workers.getRole();

    if (role === "Manager") {
        return `Office Number: ${workers.getOfficeNumber()}`;
    } else if (role === "Intern") {
        return `School: ${workers.getSchool()}`;
    } else {
        return `Github: ${workers.getGithub()}`;
    }
}

module.exports = generatePage;