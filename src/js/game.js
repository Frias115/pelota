(function() {
  'use strict';

  function Game() {
    this.player = null;
  }

  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

      this.ball = this.add.sprite(x, y, 'ball');
      this.ball.anchor.setTo(0.5, 0.5);

      this.ball.body.velocity.setTo(200, 200);
      
      this.ball.body.collideWorldBounds = true;
    },

    update: function () {
      








      /*var x, y, cx, cy, dx, dy, angle, scale;

      x = this.input.position.x;
      y = this.input.position.y;
      cx = this.world.centerX;
      cy = this.world.centerY;

      angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      this.player.angle = angle;

      dx = x - cx;
      dy = y - cy;
      scale = Math.sqrt(dx * dx + dy * dy) / 100;

      this.player.scale.x = scale * 0.6;
      this.player.scale.y = scale * 0.6;*/
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['pelota'] = window['pelota'] || {};
  window['pelota'].Game = Game;

}());
