
//Create a match function for the two clicked cards to match
var match = function(){
    var selected = document.querySelectorAll('.selected');
    //console.log(selected);
    selected.forEach(function(card){
        card.classList.add('match');
    })
};

var nextTurn = function(){
    firstClick = "";
    secondClick = "";
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

var cardsEmptyArr = [];
var flipCard = function(event){

}