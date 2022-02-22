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
      ${workers.map(element => cardGenerator(element)).join("")}
    </div>
  </body>
</html>`


    
}

function cardGenerator(workers) {

    if (workers.getRole() === "Manager") {
      return `<div class="card">
                <h2 class="cardHeader">${workers.getRole()}</h2>
                <p class="cardName">${workers.name}
                <p class="cardId">ID #: ${workers.id}<p>
                <p class="cardEmail">E-mail: ${workers.email}<p>
                <p class="cardOfficeNumber">Office #: ${workers.getOfficeNumber()}<p>
              </div>
              `
                
    } else if (workers.getRole() === "Engineer") {
      return `<div class="card">
                <h2 class="cardHeader">${workers.getRole()}</h2>
                <p class="cardName">${workers.name}
                <p class="cardId">ID #: ${workers.id}<p>
                <p class="cardEmail">E-mail: ${workers.email}<p>
                <p class="cardGithub">Github: ${workers.getGithub()}<p>
              </div>
              `

    } else {
      return `<div class="card">
                <h2 class="cardHeader">${workers.getRole()}</h2>
                <p class="cardName">${workers.name}
                <p class="cardId">ID #: ${workers.id}<p>
                <p class="cardEmail">E-mail: ${workers.email}<p>
                <p class="cardSchool">School: ${workers.getSchool()}<p>
              </div>
              `
  }

}


module.exports = generatePage;