game.AskLoginScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        this.background = new me.ImageLayer(0,0,{image:'want to login-01'});
        me.game.world.addChild(this.background,6);
        console.log("ask login");

        var viewport = me.game.viewport;
        var width = viewport.width;
        var height = viewport.height;

        this.yesButton = new game.AskLoginScreen.Yes(width/2-420,height/2);
        this.noButton = new game.AskLoginScreen.No(width/2+70,height/2);

        me.game.world.addChild(this.yesButton,10);
        me.game.world.addChild(this.noButton,10);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.game.world.removeChild(this.background);
    }
});

game.AskLoginScreen.Yes = me.GUI_Object.extend({
    init:function (x, y)
    {
        var settings = {}
        settings.image = "yes-button";
        settings.framewidth = 360;
        settings.frameheight = 140;
        // super constructor
        this._super(me.GUI_Object, "init", [x, y, settings]);
        // define the object z order
        this.pos.z = 4;
        this.anchorPoint.set(0,0);
    },

    // output something in the console
    // when the object is clicked
    onClick:function (event)
    {
        
        console.log("login");
        me.state.change(me.state.LOGIN);
        
        // don't propagate the event
        return false;
    }
});

game.AskLoginScreen.No = me.GUI_Object.extend({
    init:function (x, y)
    {
        var settings = {}
        settings.image = "no-button";
        settings.framewidth = 360;
        settings.frameheight = 140;
        // super constructor
        this._super(me.GUI_Object, "init", [x, y, settings]);
        // define the object z order
        this.pos.z = 4;
        this.anchorPoint.set(0,0);
    },

    // output something in the console
    // when the object is clicked
    onClick:function (event)
    {
        me.state.change(me.state.MENU);
        // don't propagate the event
        return false;
    }
});