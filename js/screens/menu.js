game.MenuScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        this.background = new me.ImageLayer(0,0,{image:'main-menu-enable-speaker-01'});
        me.game.world.addChild(this.background,6);

        var viewport = me.game.viewport;
        var width = viewport.width;
        var height = viewport.height;

        this.soundButton = new game.MenuScreen.Sound(width-290,10); 
        this.playButton = new game.MenuScreen.Play(width/2-430,height/2-30);
        this.avatarButton = new game.MenuScreen.Avatar(width/2-430,height/2+290);
        this.exitButton = new game.MenuScreen.Exit(width/2-430,height/2+570);

        me.game.world.addChild(this.soundButton,10);
        me.game.world.addChild(this.playButton,10);
        me.game.world.addChild(this.avatarButton,10);
        me.game.world.addChild(this.exitButton,10);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.game.world.removeChild(this.background);
    }
});

game.MenuScreen.Sound = me.GUI_Object.extend({
    init:function (x, y)
    {
        var settings = {}
        settings.image = "sound-on";
        settings.framewidth = 290;
        settings.frameheight = 290;
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
        //me.state.change(me.state.PRETEST);
        var on = me.loader.getImage('sound-on');
        var off = me.loader.getImage('sound-off');
        if(this.image == on){
            this.image = off;
        }else{
            this.image = on;
        }
        // don't propagate the event
        return false;
    }
});

game.MenuScreen.Play = me.GUI_Object.extend({
    init:function (x, y)
    {
        var settings = {}
        settings.image = "play-button";
        settings.framewidth = 870;
        settings.frameheight = 210;
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
        me.state.change(me.state.PRETEST);
        
        // don't propagate the event
        return false;
    }
});

game.MenuScreen.Avatar = me.GUI_Object.extend({
    init:function (x, y)
    {
        var settings = {}
        settings.image = "avatar-button";
        settings.framewidth = 870;
        settings.frameheight = 210;
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
        console.log("avatar");
        me.state.change(me.state.AVATAR);
        
        // don't propagate the event
        return false;
    }
});

game.MenuScreen.Exit = me.GUI_Object.extend({
    init:function (x, y)
    {
        var settings = {}
        settings.image = "exit-button";
        settings.framewidth = 870;
        settings.frameheight = 210;
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
        console.log("exit");
        //me.state.change(me.state.LOGIN);
        
        // don't propagate the event
        return false;
    }
});
