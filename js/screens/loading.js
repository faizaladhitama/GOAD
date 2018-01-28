game.LoadingScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        this.background = new me.ImageLayer(0,0,{image:'loading-01'});
        me.game.world.addChild(this.background,6);
        console.log("loading screen");

        this.timeout = setTimeout(function(){
            me.state.change(me.state.ASK_LOGIN);
        },3000);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.game.world.removeChild(this.background);
    }
});

game.LoadingScreen.Main = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.LoadingScreen.Avatar = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.LoadingScreen.Exit = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.LoadingScreen.Speaker = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});