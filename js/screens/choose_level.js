game.ChooseLevelScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        this.background = new me.ImageLayer(0,0,{image:'choose level-01'});
        me.game.world.addChild(this.background,6);

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

game.ChooseLevelScreen.Level = me.GUI_Object.extend({
    init:function(x,y,settings){

    },

    onClick:function(event){
        
    }
});