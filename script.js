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

    //Front card image
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

//Prompt user for their name and aspiration
// var promptName = prompt("What is your current name?");
// var promptAspiration = prompt("Your aspiration to be a chef is to: ");

//Creating elements to store the prompts
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

//Make an object for the ingredient(nested array for the different level later on)
var ingredientObj = {
    id: 1,
    ingredients: ["Eggs", "Butter", "Salt"],
};
//Create a line break:
var lineBreak = document.createElement('br');
var lineBreak2 = document.createElement('br');


//first recipe ingredient (hard coded!)
var divRecipe = document.getElementById('recipe');
var inputRecipe1 = document.createElement('input');
inputRecipe1.setAttribute("type", "checkbox");
var spanRecipe1 = document.createElement('span');
spanRecipe1.innerHTML = ingredientObj.ingredients[0];
//console.log(spanRecipe1.innerHTML);
divRecipe.appendChild(inputRecipe1);
divRecipe.appendChild(spanRecipe1);


//second recipe ingredient (hard coded!)
var inputRecipe2 = document.createElement('input');
inputRecipe2.setAttribute("type", "checkbox");
var spanRecipe2 = document.createElement('span');
spanRecipe2.innerHTML = ingredientObj.ingredients[1];
//console.log(spanRecipe1.innerHTML);
divRecipe.appendChild(lineBreak); //insert line break
divRecipe.appendChild(inputRecipe2);
divRecipe.appendChild(spanRecipe2);


//third recipe ingredient (hard coded!)
var inputRecipe3 = document.createElement('input');
inputRecipe3.setAttribute("type", "checkbox");
var spanRecipe3 = document.createElement('span');
spanRecipe3.innerHTML = ingredientObj.ingredients[2];
//console.log(spanRecipe1.innerHTML);
divRecipe.appendChild(lineBreak2);
divRecipe.appendChild(inputRecipe3);
divRecipe.appendChild(spanRecipe3);
/*-----------------------------------------------------------------------------------------------------------*/


//Make a new variable previousTarget to account for the first image being clicked
var previousTarget = null;

//Add event listener for each image. When image is selected, add a thin line border around the image
var imagesToBeClicked = document.querySelectorAll('.front');
//console.log(imagesToBeClicked);
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
                console.log(firstClick);
                firstClick.classList.add('selected');
                firstClick.style.display = "none";
                for (var j = 0 ; j < cards.length; j++){ // to check the line between clicked id and cards.id
                    //console.log(cards[j].id);
                    if (parseInt(firstClick.id) === cards[j].id){
                        matchFirstClick = cards[j].id;
                        matchFirstClickName = cards[j].name;
                    }
                    else{
                        console.log("something wrong");
                    }
                }
                 console.log(matchFirstClick);
                 console.log(matchFirstClickName);
            }

            else{
                secondClick = document.getElementById(`${event.target.id}`);
                secondClick.classList.add('selected');
                secondClick.style.display = "none";
                for (var k = 0; k < cards.length; k++){
                    if (parseInt(secondClick.id)=== cards[k].id){
                        matchSecondClick = cards[k].id;
                        matchSecondClickName = cards[k].name;
                    }
                    else{
                        console.log("Something is funny");
                    }
                }
            }
                console.log(matchSecondClick);
                console.log(matchSecondClickName);
            if (firstClick !== "" && secondClick !== ""){
                if (matchSecondClickName === matchFirstClickName){
                    //6 conditions to compare id for specific ingredient
                    if ( (matchFirstClick == 1 && matchSecondClick == 2) || (matchFirstClick == 2 && matchSecondClick == 1) || (matchFirstClick == 3 && matchSecondClick == 4) || (matchFirstClick == 4 && matchSecondClick == 3) || (matchFirstClick == 7 && matchSecondClick == 8) || (matchFirstClick == 8 && matchSecondClick == 7)){
                        score = score + 1;
                        setTimeout(match,500); //setTimeout to delay the time of the click result, instead of immediate showing the result
                        setTimeout(nextTurn,500);
                        previousTarget = event.target;
                    }
                    else {
                        var firstClickTimeOut = setTimeout(timeOutFirstClick, 500);
                        var secondClickTimeOut = setTimeout(timeOutSecondClick, 500);
                        setTimeout(nextTurn,500);
                    }
                }
                else{
                    var firstClickTimeOut = setTimeout(timeOutFirstClick, 500);
                    var secondClickTimeOut = setTimeout(timeOutSecondClick, 500);
                    setTimeout(nextTurn,500);
                }
                //Make a div to assign the score to.
                var idOfScore = document.getElementById('score');

                idOfScore.innerHTML = "Your Current Score: " + score;
            }
        }
    })
};
/*-----------------------------------------------------------------------------------------------------------*/










