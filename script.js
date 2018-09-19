//Create cards for the gridboard
var cards = [{
        name: "egg",
        id: 1,
        img: "images/level1/Egg1.jpg",
        frontImg: "images/level1/chef-logo.jpg"
    },
    {
        name: "egg",
        id: 2,
        img: "images/level1/Egg2.jpg",
        frontImg: "images/level1/chef-logo.jpg"

    },
    {
        name: "salt",
        id: 3,
        img: "images/level1/Salt1.jpg",
        frontImg: "images/level1/chef-logo.jpg"

    },
    {
        name: "salt",
        id: 4,
        img: "images/level1/Salt2.jpeg",
        frontImg: "images/level1/chef-logo.jpg"

    },
    {
        name: "avo",
        id: 5,
        img: "images/level1/Avo1.jpg",
        frontImg: "images/level1/chef-logo.jpg"

    },
    {
        name: "avo",
        id: 6,
        img: "images/level1/Avo2.jpg",
        frontImg: "images/level1/chef-logo.jpg"

    },
    {
        name: "butter",
        id: 7,
        img: "images/level1/Butter1.jpeg",
        frontImg: "images/level1/chef-logo.jpg"

    },
    {
        name: "butter",
        id: 8,
        img: "images/level1/Butter2.jpg",
        frontImg: "images/level1/chef-logo.jpg"

    },
    {
        name: "chili",
        id: 9,
        img: "images/level1/Chili1.jpg",
        frontImg: "images/level1/chef-logo.jpg"

    },
    {
        name: "chili",
        id: 10,
        img: "images/level1/Chili2.jpg",
        frontImg: "images/level1/chef-logo.jpg"

    },
    {
        name: "orange",
        id: 11,
        img: "images/level1/Orange1.jpg",
        frontImg: "images/level1/chef-logo.jpg"

    },
    {
        name: "orange",
        id: 12,
        img: "images/level1/Orange2.jpg",
        frontImg: "images/level1/chef-logo.jpg"

    }
];

var levels = [
{
    cardsArray: cards,
    id: 1,
    dishImage: "images/level1/scrambled-eggs.jpg",
    ingredients: ["Eggs", "Butter", "Salt"],
},];
console.log(levels);

var currentLevelId = 0;
var currentLevel = levels[currentLevelId];

//Define variable as global!
//allow only 2 cards to be selected at one time
var counter = 0;

//Assign for user first click and second click
var firstClick = "";
var secondClick = "";
var matchFirstClick = "";
var matchSecondClick = "";
var matchFirstClickName = "";
var matchSecondClickName = "";

//Getting score everytime 2 cards match
var score = 0;

var gamePlay = function(){
    //start timer
    time();

    //randomize the cards (shuffling)
    var frontCards = cards.sort(randomGrid);
    //console.log(frontCards);

/*-----------------------------------------------------------------------------------------------------------*/
    //Create gameBoard div with section grid and many images
    var gameBoard = document.createElement("div");
    gameBoard.setAttribute('id', 'gameboard');
    var grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    //console.log(grid);
    gameBoard.appendChild(grid);
    //console.log(gameBoard);
    document.body.appendChild(gameBoard);

    //Looping through the array: Create a div for each card
    cards.forEach(function(object){
        //A div for each image
        var divForCard = document.createElement('div');
        //Add a class to each card
        divForCard.classList.add('gridBox');

        //Create div for the front and back image
        var divFrontImgForCard = document.createElement('div');
        divFrontImgForCard.classList.add('front');
        var frontImgForCard = document.createElement('img');
        frontImgForCard.setAttribute('id', `${object['id']}`);
        frontImgForCard.src = object.frontImg;
        divFrontImgForCard.appendChild(frontImgForCard);
        //console.log(divFrontImgForCard);

        //Back card image
        var divBackImgForCard = document.createElement('div');
        divBackImgForCard.classList.add('back');
        var backImgForCard = document.createElement('img');
        backImgForCard.src = object.img;
        divBackImgForCard.appendChild(backImgForCard);
        //console.log(divBackImgForCard);

        divForCard.appendChild(divFrontImgForCard);
        divForCard.appendChild(divBackImgForCard);
        grid.appendChild(divForCard);
        //console.log(grid);
     });

/*-----------------------------------------------------------------------------------------------------------*/
    //Prompt user for their name and aspiration
    // var promptName = prompt("What is your current name?");
    // var promptAspiration = prompt("Your aspiration to be a chef is to: ");

    // //Creating elements to store the prompts
    // var idOfScore = document.getElementById('score');
    // var divName = document.createElement("h1");
    // divName.setAttribute('id', 'divNameDisplay')
    // var divAspiration = document.createElement("p");
    // divAspiration.setAttribute('id', 'aspiration');
    // var divNumber = document.createElement("p");
    // divName.innerHTML = "Your name is: " + promptName;
    // divAspiration.textContent = "Your aspiration to be a chef is to " + promptAspiration + ". Never forget why you are doing this!";
    // idOfScore.appendChild(divName);
    // idOfScore.appendChild(divAspiration);

//looping through ingredients to display on recipe
    var divRecipe = document.getElementById('recipe');
    var dishImageDisplay = document.createElement('img');
    dishImageDisplay.src = currentLevel.dishImage;
    divRecipe.appendChild(dishImageDisplay);
    for ( var ingredient = 0; ingredient < currentLevel.ingredients.length; ingredient++){
        var orderedListRecipe = document.createElement('ol');
        var listRecipe = document.createElement('list');
        listRecipe.innerHTML = currentLevel.ingredients[ingredient];
        listRecipe.style.fontSize = "30px";
        orderedListRecipe.appendChild(listRecipe);
        divRecipe.appendChild(orderedListRecipe);
    }

    clicking();
}
// /*-----------------------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------------------------*/
gamePlay();











