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

//randomize the cards (shuffling)
var frontCards = cards.sort(randomGrid);
//console.log(frontCards);

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

    //Front card image
    var divBackImgForCard = document.createElement('div');
    divBackImgForCard.classList.add('back');
    var backImgForCard = document.createElement('img');
    backImgForCard.src = object.img;
    divBackImgForCard.appendChild(backImgForCard);
    //console.log(divBackImgForCard);


    //create a special attribute data-name in the img tag
    //frontImgForCard.dataset.name = object.name;
    //console.log(frontImgForCard);

    //divForCard.appendChild(frontImgForCard);
    divForCard.appendChild(divFrontImgForCard);
    divForCard.appendChild(divBackImgForCard);
    grid.appendChild(divForCard);
    //console.log(grid);
 });

//allow only 2 cards to be selected at one time
var counter = 0;
//Assign for user first click and second click
var firstClick = "";
var secondClick = "";
var matchFirstClick = "";
var matchSecondClick = "";

//Make a new variable previousTarget to account for the first image being clicked
var previousTarget = null;

//Add an id for all the back

//Add event listener for each image. When image is selected, add a thin line border around the image
var imagesToBeClicked = document.querySelectorAll('.front');
console.log(imagesToBeClicked);
for (var i = 0; i < imagesToBeClicked.length; i++){
    imagesToBeClicked[i].addEventListener('click',function(event){
         //console.log(event);
        if (counter < 2){
            counter++;
            if (event.target === previousTarget){
                    return;
                } //return nothing if the same target is being clicked!

            if (counter === 1){
                firstClick = document.getElementById(`${event.target.id}`);
                firstClick.classList.add('selected');
                firstClick.style.display = "none";
                for (var j = 0 ; j < cards.length; j++){ // to check the line between clicked id and cards.id
                    //console.log(cards[j].id);
                    if (parseInt(firstClick.id) === cards[j].id){
                        matchFirstClick = cards[j].name;
                    }
                    else{
                        console.log("something wrong");
                    }
                }
                // console.log(matchFirstClick);
            }

            else{
                secondClick = document.getElementById(`${event.target.id}`);
                secondClick.classList.add('selected');
                secondClick.style.display = "none";
                for (var k = 0; k < cards.length; k++){
                    if (parseInt(secondClick.id)=== cards[k].id){
                        matchSecondClick = cards[k].name;
                    }
                    else{
                        console.log("Something is funny");
                    }
                }
            }
                // console.log(secondClick);
                // console.log(matchSecondClick);
            if (firstClick !== "" && secondClick !== ""){
                if (matchFirstClick === matchSecondClick){
                    setTimeout(match,1000); //setTimeout to delay the time of the click result, instead of immediate showing the result
                    setTimeout(nextTurn,1000);
                }
                else{
                    var firstClickTimeOut = setTimeout(timeOutFirstClick, 1000);
                    var secondClickTimeOut = setTimeout(timeOutSecondClick, 1000);
                    setTimeout(nextTurn,1000);
                }
            }

            previousTarget = event.target

        }

    })
};









