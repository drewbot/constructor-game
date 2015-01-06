
//Write player constructors to contain power points and attack point structure

function Player1 () {
  this.power = 100;

  this.primaryAttack = function(target) {
    target.power = target.power -20;
    this.power = this.power -5;
  };

  this.secondaryAttack = function(target) {
    target.power = target.power -30;
    this.power = this.power -10;
  };

  this.specialAttack = function(target) {
    target.power = target.power -10;
    this.power = this.power +10;
  };
}

function Player2 () {
  this.power = 50;

  this.primaryAttack = function(target) {
    target.power = target.power -20;
  };

  this.secondaryAttack = function(target) {
    target.power = target.power -30;
  };

  this.specialAttack = function(target) {
    target.power = target.power -30;
    this.power = this.power +40;
  };
}

function Player3 () {
  this.power = 75;

  this.primaryAttack = function(target) {
    target.power = target.power -30;
    this.power = this.power -5;
  };

  this.secondaryAttack = function(target) {
    target.power = target.power -40;
    this.power = this.power -10;
  };

  this.specialAttack = function(target) {
    target.power = target.power -30;
    this.power = this.power +20;
  };
}

//Write enemy constructors to contain power points and attack point structure

function Enemy1 (level) {
  this.power = 80;

  this.primaryAttack = function(target){
    target.power = target.power -30;
  };

  this.secondaryAttack = function(target){
    target.power = target.power -40;
  };

  this.specialAttack = function(target){
    target.power = target.power -40;
    this.power = this.power +40;
  };
}

function Enemy2 (level) {
  this.power = 65;

  this.primaryAttack = function(target){
    target.power = target.power -20;
  };

  this.secondaryAttack = function(target){
    target.power = target.power -30;
  };

  this.specialAttack = function(target){
    target.power = target.power -40;
    this.power = this.power +20;
  };
}

function Enemy3 (level) {
  this.power = 85;

  this.primaryAttack = function(target){
    target.power = target.power -20;
  };

  this.secondaryAttack = function(target){
    target.power = target.power -30;
    this.power = this.power -5;
  };

  this.specialAttack = function(target){
    target.power = target.power -40;
    this.power = this.power +10;
  };
}

//Store the variable to randomly select one of three enemies when activated
    //Random number is ran through an if else if statement to determine which enemy attack is launched
      //Enemy attack is printed to the dom

var randomNumber = Math.floor(Math.random() * 10 )+1;
    if (randomNumber > 3 && randomNumber < 7){
      enemy = new Enemy2();   
      $('.status').html('Enemy launches a special attack!');
    } else if (randomNumber > 7){
      enemy = new Enemy3();   
      $('.status').html('Enemy launches a secondary attack!');
    } else {
      enemy = new Enemy1();   
      $('.status').html('Enemy launches a primary attack!');
    }

//Store the variable to hold fighter stats and power bars
var fighterStats = function (){
  renderPlayerInfo(player);
  powerBar(player);
  renderEnemyInfo(enemy);
  enemyBar(enemy);
}

//Store the variable to run the battle
var runBattle = function(){
  //Randomly generate enemy by calling the variable above
  randomNumber;
  //Remove the player choices
  $('.choices').remove();
  //Add the battle menu with attack options
  $('.battle-menu').addClass('active');
  //Show fighter stats by calling on the function above
  fighterStats();
}

//Choose 1 of 3 Players by clicking one of three buttons (first interaction)
//form a new iteration of the Player constructor
//Run the function above to start the battle

$('.choose-player1').click(function(){
  player = new Player1();
  runBattle();
});

$('.choose-player2').click(function(){
  player = new Player2();
  runBattle();
 
});

$('.choose-player3').click(function(){
  player = new Player3();
  runBattle();
 
});

//Store the function to show the reset option when the game is finished
function showReset () {
  $('.show-reset').addClass('active');
}

//Store the function to render player profile info based on current player.power
  //display a lose message if player.power is < 1
function renderPlayerInfo (player) {
  if (player.power < 1) {
    $('.status').html('You lose!');
    showReset();
  } else {
    $('.player-info').html("Player has a power level of " + player.power)
  };
}
 
//Store the function to render enemy profile info based on current player.power
  //display a win message if enemy.power is < 1
function renderEnemyInfo (enemy) {
  if (enemy.power < 1) {
    $('.status').html('You win!');
    showReset();
  } else {
    $('.enemy-info').html("Enemy has a power level of " + enemy.power);
  }
}


// function generatePowerColor (player) {
//   var width = (player.power / 100) * 255;
//   return "background: rgb(0," + player.power + ", 0); width: " + width + "%;"
// }

// function powerBar (player) {
//   $('.player-bar').attr('style', generatePowerColor(player))
// }

//store the function to display a progress bar width based on player.power
  //an if else if statement is used to render a class with a specific width representative of current player.power
function powerBar (player) {
  if (player.power > 90 && player.power < 150){
      $('.player-bar').attr('class','player-bar').addClass('power10');
    } else if (player.power >= 80 && player.power < 90){
      $('.player-bar').attr('class','player-bar').addClass('power9');
    } else if (player.power >= 70 && player.power < 80){
      $('.player-bar').attr('class','player-bar').addClass('power8');
    } else if (player.power >= 60 && player.power < 70){
      $('.player-bar').attr('class','player-bar').addClass('power7');
    } else if (player.power >= 50 && player.power < 60){
      $('.player-bar').attr('class','player-bar').addClass('power6');
    } else if (player.power >= 40 && player.power < 50){
      $('.player-bar').attr('class','player-bar').addClass('power5');
    } else if (player.power >= 30 && player.power < 40){
      $('.player-bar').attr('class','player-bar').addClass('power4');
    } else if (player.power >= 20 && player.power < 30){
      $('.player-bar').attr('class','player-bar').addClass('power3');
    } else if (player.power >= 10 && player.power < 20){
      $('.player-bar').attr('class','player-bar').addClass('power2');
    } else if (player.power >= 5 && player.power < 10){
      $('.player-bar').attr('class','player-bar').addClass('power1');
    } else {
      $('.player-bar').addClass('power0');
    }
}

//store the function to display a progress bar width based on enemy.power
  //an if else if statement is used to render a class with a specific width representative of current enemy.power
function enemyBar (enemy) {
  if (enemy.power > 90 && enemy.power < 150){
      $('.enemy-bar').attr('class','enemy-bar').addClass('power10');
    } else if (enemy.power > 80 && enemy.power < 90){
      $('.enemy-bar').attr('class','enemy-bar').addClass('power9');
    } else if (enemy.power > 70 && enemy.power < 80){
      $('.enemy-bar').attr('class','enemy-bar').addClass('power8');
    } else if (enemy.power > 60 && enemy.power < 70){
      $('.enemy-bar').attr('class','enemy-bar').addClass('power7');
    } else if (enemy.power > 50 && enemy.power < 60){
      $('.enemy-bar').attr('class','enemy-bar').addClass('power6');
    } else if (enemy.power > 40 && enemy.power < 50){
      $('.enemy-bar').attr('class','enemy-bar').addClass('power5');
    } else if (enemy.power > 30 && enemy.power < 40){
      $('.enemy-bar').attr('class','enemy-bar').addClass('power4');
    } else if (enemy.power > 20 && enemy.power < 30){
      $('.enemy-bar').attr('class','enemy-bar').addClass('power3');
    } else if (enemy.power > 10 && enemy.power < 20){
      $('.enemy-bar').attr('class','enemy-bar').addClass('power2');
    } else if (enemy.power > 5 && enemy.power < 10){
      $('.enemy-bar').attr('class','enemy-bar').addClass('power1');
    } else {
      $('.enemy-bar').attr('class','enemy-bar').addClass('power0');
    }
}

//Attach a click event to each attack option
  //declare attack, fighter stats
  //trigger an enemy attack by calling on the function below
$('.primary').click(function(){
  player.primaryAttack(enemy);
  $('.status').html('You launch a primary attack!');

  fighterStats();
 
  triggerEnemyAttack(player);
  
});

$('.secondary').click(function(){
  player.secondaryAttack(enemy);
  $('.status').html('You launch a seconary attack!');

  fighterStats();
 
  triggerEnemyAttack();
})
 
$('.special').click(function(){
  player.specialAttack(enemy);
  $('.status').html('You launch a special attack!');

  fighterStats();
 
  triggerEnemyAttack();
});

//Write the function to execute an enemy attack when called upon
    //a random number is generated and one of three attacks is chosen
    //power bars should be updated
function triggerEnemyAttack () {
  setTimeout(function(){
    var randomNumber = Math.floor(Math.random() * 10 );
    if (randomNumber > 3 && randomNumber < 7){
      enemy.specialAttack(player);   
      $('.status').html('Enemy launches a special attack!');
    } else if (randomNumber > 7){
      enemy.secondaryAttack(player);   
      $('.status').html('Enemy launches a secondary attack!');
    } else {
      enemy.primaryAttack(player);   
      $('.status').html('Enemy launches a primary attack!');
    }
    //update fighter stats
    fighterStats();
  }, 2500);
}

// give the reset button page reload functionality
$('.show-reset').click(function() {
    location.reload();
});




//Create a function to render a new image which is passed through as the argument
function addNewImage(imageDiv) {
  $('.newImage').attr( "src", imageDiv);
  return imageDiv
}

addNewImage( )
//Image Path^goes here


function RollDice(x) {
  var randomNumber = Math.floor(Math.random() * x );
  $('.di-face').text(randomNumber);
}






