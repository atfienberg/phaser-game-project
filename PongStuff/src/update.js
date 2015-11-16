function update() {
    this.game.physics.arcade.collide(ball, group, null, null, this);
    
    this.game.physics.arcade.overlap(ball, playerGoal, 
				     function(ball, player){
					 score(computerPaddle, this.game.width);
				     }, 
				     null, this);

    this.game.physics.arcade.overlap(ball, computerGoal, 
				     function(ball, player){
					 score(playerPaddle, this.game.width);
				     }, 
				     null, this);

    //move player paddle
    if (cursors.up.isDown) {
	playerPaddle.body.velocity.y = -300;
    }
    else if (cursors.down.isDown) {
	playerPaddle.body.velocity.y = 300;
    }
    else{
	playerPaddle.body.velocity.y = 0;
    }

    //move computer paddle
    var computerPaddleCenter = computerPaddle.y + computerPaddle.height/2;
    if( ball.y > computerPaddleCenter ){
        computerPaddle.body.velocity.y = 300;
    }
    else if (ball.y < computerPaddleCenter ){
	computerPaddle.body.velocity.y = -300;
    }
    else{
	computerPaddle.body.velocity.y = 0;
    }
    
}


function score( scorer, width ){
    var v = ball.body.velocity.x;

    var sign = ball.body.x < width/2 ? -1 : 1;

    ball.body.velocity.x = -1*sign*(Math.abs(v)*1.05);

    scorer.score += 1;
    scorer.scoreText.text = 'Score: ' + scorer.score;

    ball.x = 500;
    ball.y = 300;
}

