var ball;
var playerPaddle;
var computerPaddle;
var group;
var playerGoal;
var computerGoal;

function create () {

    this.game.physics.startSystem(Phaser.Physics.Arcade);

    cursors = this.game.input.keyboard.createCursorKeys();

    //make ball
    ball = this.game.add.sprite(500, 300, 'ball');

    //make player paddle
    playerPaddle = this.game.add.sprite(50, 300, 'box');
    playerPaddle.scale.setTo(0.5,3);
    playerPaddle.score = 0;
    playerPaddle.scoreText = this.game.add.text(20, 10, 'Score: 0', {fontSize: '32px', fill : '#fff'}); 

    //make computer paddle
    computerPaddle = this.game.add.sprite(800 - 50 - playerPaddle.width, 300, 'box');
    computerPaddle.scale.setTo(0.5,3);
    computerPaddle.score = 0;
    computerPaddle.scoreText= this.game.add.text(0, 10, 'Score: 0', {fontSize: '32px', fill : '#fff'}); 
    computerPaddle.scoreText.x = 780 - computerPaddle.scoreText.width;

    //make player goal
    playerGoal = this.game.add.sprite(0,0);
    playerGoal.scale = {x: 1, y: this.game.height};

    //make computer goal
    computerGoal = this.game.add.sprite(this.game.width - 1,0);
    computerGoal.scale = playerGoal.scale;
    
    this.game.physics.arcade.enable([ball, playerPaddle, computerPaddle, playerGoal, computerGoal]);
    ball.body.velocity = {x: 300, y: 300};
    ball.body.collideWorldBounds = true;
    ball.body.bounce = { x : 1, y : 1};
	
    playerPaddle.body.immovable = true;
    playerPaddle.body.collideWorldBounds = true;
    computerPaddle.body.immovable = true;
    computerPaddle.body.collideWorldBounds = true;

    group = this.game.add.group();
    group.add(computerPaddle);
    group.add(playerPaddle);
}
