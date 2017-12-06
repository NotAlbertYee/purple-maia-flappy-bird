/* global game, Phaser, playState, menuState, mainMenuState */

var startBtn;

var mainMenuState = {
    
    
    preload: function() { 
        game.load.spritesheet('startBtn', 'assets/images/start_btn.png' 193, 71)
        
        game.stage.backgroundColor: '#8185d5'
    },
    
    
    create: function() {
        
    },
    
    
    update: function() {
        
    },

    startGame: function() {
       // game.state.start('play');
    }

};
