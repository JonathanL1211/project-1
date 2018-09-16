//Create cards for the gridboard
var cards = [{
        name: "egg",
        img: "images/level1/Egg1.jpg",
    },
    {
        name: "egg",
        img: "images/level1/Egg2.jpg",
    },
    {
        name: "salt",
        img: "images/level1/Salt1.jpg",
    },
    {
        name: "salt",
        img: "images/level1/Salt2.jpeg",
    },
    {
        name: "avo",
        img: "images/level1/Avo1.jpg",
    },
    {
        name: "avo",
        img: "images/level1/Avo2.jpg",
    },
    {
        name: "butter",
        img: "images/level1/Butter1.jpeg",
    },
    {
        name: "butter",
        img: "images/level1/Butter2.jpg",
    },
    {
        name: "chili",
        img: "images/level1/Chili1.jpg",
    },
    {
        name: "chili",
        img: "images/level1/Chili2.jpg",
    },
    {
        name: "orange",
        img: "images/level1/Orange1.jpg",
    },
    {
        name: "orange",
        img: "images/level1/Orange2.jpg",
    }
];

//randomize the cards (shuffling)
cards.sort(function(a,b){
    return 0.5 - Math.random();
});


//Create gameBoard div with section grid and many images
var gameBoard = document.createElement("div");
gameBoard.setAttribute('id', 'gameboard');
var grid = document.createElement('section');
grid.setAttribute('class', 'grid');
//console.log(grid);
gameBoard.appendChild(grid);
console.log(gameBoard);
document.body.appendChild(gameBoard);

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
    //console.log(grid);
 });

