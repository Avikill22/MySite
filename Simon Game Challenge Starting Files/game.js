var keyElements=["red","yellow","blue","green"];
var level = 0;
var started = false;
var gamepattern=[];
var userInputPattern=[];

$(document).keydown(function(event){
    if(!started){
        sequenceSet();
        started = true;
        
        
    }
});
function sequenceSet(){
    userInputPattern = [];
    var randomNumber =  Math.floor(Math.random()*4);
    gamepattern.push(keyElements[randomNumber]);
    level++;
    $("#level-title").html("level "+level);
    $("#"+keyElements[randomNumber]).addClass("pressed").delay(200).queue(function(){
        $("#"+keyElements[randomNumber]).removeClass("pressed").dequeue();
    });

    playSound(keyElements[randomNumber]);

}
function playSound(input){
    var audio = new Audio("sounds/"+input+".mp3");
    audio.play();
}
$(".btn").click(function(event){
    if(started){
        var target = $(this).attr("id");
        playSound(target);
        console.log(target);
        $("#"+target).addClass("pressed").delay(200).queue(function(){
            $("#"+target).removeClass("pressed").dequeue();
        });
        userInputPattern.push(target);
        game(userInputPattern.length-1);
    }

});
function game(input){
    if(gamepattern[input]===userInputPattern[input]){
        if(gamepattern.length==userInputPattern.length){
            setTimeout(function () {
                sequenceSet();
              }, 1000);
        }
    }else{
        playSound("wrong");
        $("body").addClass("game-over").delay(200).queue(function(){
            $("body").removeClass("game-over").dequeue();
        });
        $("#level-title").html("Game over, restart the game by clicking some keypad");
        restart();
    }
    
    

}
function restart(){
    gamepattern = [];
    level = 0;
    started = false;
}

