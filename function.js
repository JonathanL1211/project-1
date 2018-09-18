
//Create a match function for the two clicked cards to match
var match = function(){
    var selected = document.querySelectorAll('.selected');
    //console.log(selected);
    selected.forEach(function(card){
        card.classList.add('match');
    });
    // alert("you scored!");
};

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

var timeOutFirstClick = function(){
    firstClick.style.display = "block";
};

var timeOutSecondClick = function(){
    secondClick.style.display = "block";
};

// <!-- <div id="timer">
//         <p id="countdowntimer">10</p>
//     </div> -->