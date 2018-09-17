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
    count = 0;

    // var selected = document.querySelectorAll('.selected');
    // selected.forEach(function(card){
    //     card.classList.remove('match');
    // });
};