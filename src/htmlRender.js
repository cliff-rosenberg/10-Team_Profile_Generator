// HTML Rendering

const managerCard = `
<div class="card">
        <div class="card-header">
                <h3>${manager.getName()} <i class="${manager.getIcon()}"></i> </h3>
                <h5 class="card-title">${manager.getRole()}</h5>
        </div>
        <div class="card-body">
                <p class="card-text"><span>ID: </span>${manager.getId()}</p>
                <p class="card-text"><span>Email: </span><a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></p>
                <p class="card-text"><span>Office Number: </span>${manager.getOfficeNum()}</p>
        </div>
</div>
`;

// header and main HTML boilerplate
const mainHTML = `
<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/4387ae0935.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../dist/style.css">
        <title>Meet the Team</title>
    </head>
        <body>
            <header>
                    <div class="container-fluid">
                            <div class="row">
                                <!-- header goes here -->
                                <div class="col-12 header">
                                        <h1>Meet the Team</h1>
                                </div>
                            </div>
                            <div class="row mt-5" id="cardRow">
                                
                            </div>
                    </div>
            </header>
        </body>
</html>
`;

let renderedHTML = "";

module.exports = renderedHTML;
