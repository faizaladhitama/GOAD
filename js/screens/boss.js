game.BossScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        this.background = new me.ImageLayer(0,0,{image:'avatar-01'});
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

game.BossScreen.Continue = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.BossScreen.Back = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.BossScreen.Hint = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.BossScreen.Answer = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});