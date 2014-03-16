(function() {
  'use strict';

  function Game() {
    this.player = null;
    this.ball = null;
    this.hand = null;
    this.noBall = false;
    this.restartText = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.ball = this.add.sprite(x, y, 'ball');
      this.ball.body.setCircle(16);
      this.ball.body.velocity.setTo((Math.random()*100)-100, -400);
      this.ball.body.bounce.setTo(1, 1);
      this.ball.body.collideWorldBounds = true;
      this.game.physics.setBounds(0,-99999,640,100879,true,true,true,false);
      this.ball.body.gravity.setTo(0, 200);


      this.hand = this.add.sprite(320,700, 'hand');
      this.hand.body.immovable = true;

      this.restartText = this.add.text(275, 300, '', {font: "20px Arial", fill: "#ffffff", align: "center"});
      this.clickText = this.add.text(270, 320, '', {font: "20px Arial", fill: "#ffffff", align: "center"});
    },

    update: function () {
      
      this.hand.x = this.game.input.mousePointer.x;
      if (this.hand.x < 0){
        this.hand.x = 0;
      }
      else if (this.hand.x > 600){
        this.hand.x = 600;
      }


      this.game.physics.collide(this.hand, this.ball, function(){this.ball.body.velocity.y -= 400; this.ball.body.velocity.x = (Math.random()*100)-100;}, null, this);

      if (this.ball.y > 800){
        this.timer = this.time.now;
        this.ball.kill();
        this.noBall = true;
        this.restartText.content = 'GAME OVER ';
        this.clickText.content = 'Click to restart';    
     }

     if (this.noBall === true){
       this.input.onDown.add(function(){
          if (this.noBall === true){
          this.time.reset();
          this.restartText.content = '';  
          this.clickText.content = ''; 
          this.ball.reset(300,500);
          this.ball.body.velocity.setTo((Math.random()*100)-100, -400);}
          this.noBall = false;}, this);
      }
    },

    render: function() {
      //this.game.debug.renderBodyInfo(this.ball, 32, 32);
      //this.game.debug.renderPhysicsBody(this.ball.body);
    }


  };

  window['pelota'] = window['pelota'] || {};
  window['pelota'].Game = Game;

}());
