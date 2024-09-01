var btns=["red","blue","green","yellow"];
var level=1;
var chosen_pattern=[];
var pattern=[];
var check=0;
var started=false;
var highScore=parseInt($(".scorebox").text());
var username=$(".username").text();
var isMobile = window.matchMedia("(max-width: 768px)").matches;

$(".username").text(username); 
$(".game").css("display","block");

function playSound(col){
    var audio=new Audio("sounds/"+col+".mp3");
    audio.play();
}

function animateWhenPress(col){
    $('.'+col).toggleClass("pressed");
    setTimeout(function(){$('.'+col).toggleClass("pressed")},100);
}

function game_Over(){
    highScore=Math.max(highScore,level-2);
    $("body").toggleClass("game-over");
    setTimeout(function(){$("body").toggleClass("game-over")},100);
    playSound("wrong");
    
    if(isMobile){
        $("h1").text("Game Over, Press Again to Restart");
        $('#startButton').show();
    }
    else {
        $("h1").text("Game Over, Press Any Key to Restart");
    }
    
    $(".scorebox").text(highScore.toString(10));
    
    if (level - 2 >= highScore) {
        console.log("updated");
        updateHighScore(highScore);
    }
    
    startOver();
}

function updateHighScore(newHighScore) {
    $.post("/updateHighScore", { username: username, highscore: newHighScore })
        .done(function() {
            console.log("High score updated successfully.");
        })
        .fail(function() {
            console.error("Error updating high score.");
        });
}

function startOver(){
    level=1;
    check=0;
    pattern=[];
    chosen_pattern=[];
    started=false;
}

function sequence_new(){
    $("h1").text("Level "+level);
    var ran_num=Math.floor(Math.random()*4);
    var ran_col=btns[ran_num];
    pattern.push(ran_col);
    $('.'+ran_col).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(ran_col);
    level++;
}

if(isMobile){
    $("h1").text("Press The Start Button To Start");
}

$(".box").click(function(){
    if(!started) return;
    var chosen=$(this).attr("class").split(' ')[0];
    chosen_pattern.push(chosen);
    animateWhenPress(chosen);
    playSound(chosen);
    check++;
    
    if(check==pattern.length){
        if(JSON.stringify(chosen_pattern)===JSON.stringify(pattern)){
            check=0;
            chosen_pattern=[];
            setTimeout(function(){sequence_new();},100);
        } else {
            game_Over();
        }
    } else if(chosen!==pattern[check-1]){
        game_Over();
    }
});

$(document).on("keydown",function(){
    setTimeout(function(){
        if(!started){
            started=true;
            level=1;
            sequence_new();
        }
    },100);
});

$('#startButton').on('click', function() {
    setTimeout(function(){
        if(!started){
            started=true;
            level=1;
            sequence_new();
            $('#startButton').hide();
        }
    },100);
});
