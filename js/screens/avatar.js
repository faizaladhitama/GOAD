game.AvatarScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        this.background = new me.ImageLayer(0,0,{image:'avatar-01'});
        me.game.world.addChild(this.background,6);

        this.back = new game.AvatarScreen.Back(40,20);
        me.game.world.addChild(this.back,7);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.game.world.removeChild(this.background);
    }
});

game.AvatarScreen.Back = me.GUI_Object.extend({
    init:function(x,y){
        var settings = {};
        settings.image = "back-button";
        settings.framewidth = 150;
        settings.frameheight = 140;
        // super constructor
        this._super(me.GUI_Object, "init", [x, y, settings]);
        // define the object z order
        this.pos.z = 4;
        this.anchorPoint.set(0,0);
    },

    onClick:function(event){
        me.state.change(me.state.MENU);
        return false;
        
    }
});

game.AvatarScreen.Male = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.AvatarScreen.Female = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.AvatarScreen.Face = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.AvatarScreen.Shirt = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.AvatarScreen.Accessorise = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});