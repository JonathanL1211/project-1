// These are the list of functions that were used in script.js main function gameplay
var nextTurn = function(){
    firstClick = "";
    secondClick = "";
    // matchFirstClick = "";
    // matchSecondClick = "";
    counter = 0;

    //need to remove the class if player select cards that dont match
    var selected = document.querySelectorAll('.selected');
    selected.forEach(function(card){
        card.classList.remove('selected');
    });
};

var randomGrid = function(a,b){
    return 0.5 - Math.random();
};

var resetClick = function(){
    firstClick.style.display = "block";
    secondClick.style.display = "block";
    // nextTurn();
}

var checkForWin = function(){
    if (score === 3){
        //if ()
        //alert("Great job, you won! Here's a question: Where are the first 2 Asian street stalls to get awarded michelin stars? (Hint is somewhere on this page)");
    }
}

var promptPlayer = function(){
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

}

var createGameBoard = function(levels){

    //start timer
    time();

    //Looping through the array: Create a div for each card
    levels.cardsArray.forEach(function(object){
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

        //looping through ingredients to display on recipe
    var divRecipe = document.getElementById('recipe');
    //create section for removeChild in reset
    var divSectionRecipe = document.createElement('section');
    divSectionRecipe.setAttribute('id', 'recipeSection');
    //create p tag
    var pTagRecipe = document.createElement('p');
    pTagRecipe.innerHTML = "First dish: Scrambled Eggs";

    var dishImageDisplay = document.createElement('img');
    dishImageDisplay.src = levels.dishImage;

    divSectionRecipe.appendChild(pTagRecipe);
    divSectionRecipe.appendChild(dishImageDisplay)
    divRecipe.appendChild(divSectionRecipe);

    for ( var ingredient = 0; ingredient < levels.ingredients.length; ingredient++){
        var orderedListRecipe = document.createElement('ol');
        var listRecipe = document.createElement('list');
        listRecipe.innerHTML = levels.ingredients[ingredient];
        listRecipe.style.fontSize = "30px";
        orderedListRecipe.appendChild(listRecipe);
        divSectionRecipe.appendChild(orderedListRecipe);
    }
    clicking();
}



var clicking = function(){
    //Add event listener for each image. When image is selected, add a thin line border around the image
    var imagesToBeClicked = document.querySelectorAll('.front');
    //console.log(imagesToBeClicked);
    for (var i = 0; i < imagesToBeClicked.length; i++){
        imagesToBeClicked[i].addEventListener('click', matchCondition)
    };
}

var matchCondition = function(){

    //Make a new variable previousTarget to account for the first image being clicked
    var previousTarget = null;
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
             // console.log(matchFirstClick);
             // console.log(matchFirstClickName);
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
            //console.log(matchSecondClick);
            //console.log(matchSecondClickName);
        if (firstClick !== "" && secondClick !== ""){
            if (matchSecondClickName === matchFirstClickName){
                //6 conditions to compare id for specific ingredient
                if ( (matchFirstClick == 1 && matchSecondClick == 2) || (matchFirstClick == 2 && matchSecondClick == 1) || (matchFirstClick == 3 && matchSecondClick == 4) || (matchFirstClick == 4 && matchSecondClick == 3) || (matchFirstClick == 7 && matchSecondClick == 8) || (matchFirstClick == 8 && matchSecondClick == 7)){
                    score = score + 1;
                    //console.log(score);
                    checkForWin();
                    //setTimeout(match,500); //setTimeout to delay the time of the click result, instead of immediate showing the result
                    setTimeout(nextTurn,500);
                    previousTarget = event.target;
                }
                else {
                    var clickTimeout = setTimeout(resetClick, 500);
                    setTimeout(nextTurn,500);
                }
            }
            else{
                // var firstClickTimeOut = setTimeout(timeOutFirstClick, 500);
                // var secondClickTimeOut = setTimeout(timeOutSecondClick, 500);
                var clickTimeout = setTimeout(resetClick, 500);
                setTimeout(nextTurn,500);
            }
            //Make a div to assign the score to.
            var idOfScore = document.getElementById('scoreSystem');

            idOfScore.innerHTML = "Your Current Score: " + score;
        }
    }
}

var resetGame = function(levels){
    var parentIdGrid = document.getElementById('grid');
    //console.log(parentIdGrid);
    var divClassGridBox = document.querySelectorAll('.gridBox');
    //console.log(divClassGridBox);
    for (var i = 0; i < divClassGridBox.length; i++){
        parentIdGrid.removeChild(divClassGridBox[i]);
    }

    var parentIdRecipe = document.getElementById('recipe');
    console.log(parentIdRecipe);
    var sectionIdRecipe = document.getElementById('recipeSection');
    console.log(sectionIdRecipe);
    parentIdRecipe.removeChild(sectionIdRecipe);
    //console.log(parentIdRecipe);
    if (confirm("Do you want to restart this game?")){
        score = 0;
        createGameBoard(levels);
    }
    else {
        console.log("Thanks for playing!");
    }
}

var time = function(){
    var timeleft = 16;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0){
        resetGame(levels[0]);
        clearInterval(downloadTimer);
        //alert("Time is up!");

    }
    else if (score ===3){
        clearInterval(downloadTimer);
    }
 },1000);
}


