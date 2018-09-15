//Create cards for the gridboard
var cards = [{
        name: "egg1",
        img: "images/level1/Egg1.jpg",
    },
    {
        name: "egg2",
        img: "images/level1/Egg2.jpg",
    },
    {
        name: "salt1",
        img: "images/level1/Salt1.jpg",
    },
    {
        name: "salt2",
        img: "images/level1/Salt2.jpeg",
    },
    {
        name: "avo1",
        img: "images/level1/Avo1.jpg",
    },
    {
        name: "avo2",
        img: "images/level1/Avo2.jpg",
    },
    {
        name: "butter1",
        img: "images/level1/Butter1.jpeg",
    },
    {
        name: "butter2",
        img: "images/level1/Butter2.jpg",
    },
    {
        name: "chili1",
        img: "images/level1/Chili1.jpg",
    },
    {
        name: "chili2",
        img: "images/level1/Chili2.jpg",
    },
    {
        name: "orange1",
        img: "images/level1/Orange1.jpg",
    },
    {
        name: "orange1",
        img: "images/level1/Orange2.jpg",
    }
];

var gameBoard = document.getElementById("gameboard");
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
//console.log(grid);
gameboard.appendChild(grid);
//console.log(gameboard);

//Looping through the array: Create a div for each card
cards.forEach(function(object){
    var divForCard = document.createElement('div');
    var imgForCard = document.createElement('img');
    imgForCard.classList.add('gridImage');
    //Add a class to each card
    divForCard.classList.add('gridBox');
    imgForCard.src = object.img;
    divForCard.appendChild(imgForCard);
    grid.appendChild(divForCard);
    console.log(grid);

});










