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
cards.sort(randomGrid);

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
    // console.log(imgForCard);


    //hide all the cards
    //imgForCard.style.display = "none";
    //create a special attribute data-name in the img tag
    imgForCard.dataset.name = object.name;
    //console.log(imgForCard);

    divForCard.appendChild(imgForCard);
    grid.appendChild(divForCard);
    //console.log(grid);
 });

//allow only 2 cards to be selected at one time
var counter = 0;
//Assign for user first click and second click
var firstClick = "";
var secondClick = "";

//Make a new variable previousTarget to account for the first image being clicked
var previousTarget = null;

//Add event listener for each image. When image is selected, add a thin line border around the image
var imagesToBeClicked = document.querySelectorAll('.gridImage');
//console.log(imagesToBeClicked);
for (var i = 0; i < imagesToBeClicked.length; i++){
    imagesToBeClicked[i].addEventListener('click',function(event){
        //console.log(this.getAttribute("data-name"));
        if (counter < 2){
            counter++;
            if (event.target === previousTarget){
                    return;
                } //return nothing if the same target is being clicked!

            if (counter === 1){
                firstClick = this.getAttribute("data-name");
                this.classList.add("selected");
                // this.style.visibility = "visible";
                // console.log(this);
                // console.log(firstClick);
            }
            else {
                secondClick = this.getAttribute("data-name");
                this.classList.add("selected");
                //this.style.visibility = "hidden";

                //console.log(secondClick);
            }
            if (firstClick !== "" && secondClick !== ""){
                if (firstClick === secondClick){
                    match();
                    nextTurn();
                }
                else{
                    nextTurn();
                }
            }

            previousTarget = event.target
        }

    })
};









