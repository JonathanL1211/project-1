
//Create a match function for the two clicked cards to match
// var match = function(){
//     var selected = document.querySelectorAll('.selected');
//     //console.log(selected);
//     selected.forEach(function(card){
//         card.classList.add('match');
//     });
//     // alert("you scored!");
// };

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
            var idOfScore = document.getElementById('score');

            idOfScore.innerHTML = "Your Current Score: " + score;
        }
    }
}

var clicking = function(){
        //Add event listener for each image. When image is selected, add a thin line border around the image
        var imagesToBeClicked = document.querySelectorAll('.front');
        console.log(imagesToBeClicked);
        for (var i = 0; i < imagesToBeClicked.length; i++){
            imagesToBeClicked[i].addEventListener('click', matchCondition)
        };
}

var reloadGame = function(){
    clicking();
}

var time = function(){
    var timeleft = 11;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        //alert("Time is up!");

      }
 },1000);
}


