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

// var currentLevelId = 0;
// var currentLevel = levels[currentLevelId];

//Define variable as global!
//allow only 2 cards to be selected at one time
var counter = 0;

//Getting score everytime 2 cards match
var score = 0;

//Assign for user first click and second click
var firstClick = "";
var secondClick = "";
var matchFirstClick = "";
var matchSecondClick = "";
var matchFirstClickName = "";
var matchSecondClickName = "";

var gamePlay = function(levels){
    //randomize the cards (shuffling)
    var frontCards = levels.cardsArray.sort(randomGrid);
    //console.log(frontCards);
/*-----------------------------------------------------------------------------------------------------------*/
    //Create gameBoard div with section grid and many images
    var gameBoard = document.createElement("div");
    gameBoard.setAttribute('id', 'gameboard');
    var grid = document.createElement('section');
    grid.setAttribute('id', 'grid');
    //console.log(grid);
    gameBoard.appendChild(grid);
    //console.log(gameBoard);
    document.body.appendChild(gameBoard);
    createGameBoard(levels);
}
// /*-----------------------------------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------------------------------*/
gamePlay(levels[0]);











