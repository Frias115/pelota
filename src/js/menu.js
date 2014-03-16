(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


      this.titleTxt = this.add.bitmapText(320, 200, 'Bounce', {font: '32px minecraftia', align: 'center'});
      this.titleTxt.anchor.setTo(0.5, 0.5);

      this.controlsText = this.add.bitmapText(320, 300, 'Controls: Move the hand with the mouse', {font: '16px minecraftia', align: 'center'});
      this.controlsText.anchor.setTo(0.5, 0.5);

      y = y + this.titleTxt.height + 5;
      this.startTxt = this.add.bitmapText(320, 400, 'Click to start', {font: '12px minecraftia', align: 'center'});
      this.startTxt.anchor.setTo(0.5, 0.5);

      this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },

    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['pelota'] = window['pelota'] || {};
  window['pelota'].Menu = Menu;

}());
