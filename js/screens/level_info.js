game.LevelInfoScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        this.background = new me.ImageLayer(0,0,{image:'avatar-01'});
        me.game.world.addChild(this.background,6);
        console.log("level info");

        this.timeout = setTimeout(function(){
            me.state.change(me.state.MENU);
        },3000);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.game.world.removeChild(this.background);
    }
});

game.LevelInfoScreen.Continue = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.LevelScreen.ChooseQuestion = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});