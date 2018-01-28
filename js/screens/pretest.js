game.PretestScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        this.background = new me.ImageLayer(0,0,{image:'tell-pretest-01'});
        me.game.world.addChild(this.background,6);
        
        var viewport = me.game.viewport;
        var width = viewport.width;
        var height = viewport.height;

        this.continue = new game.PretestScreen.Continue(width/2-170,height/2+260,
            {screen:this});
        me.game.world.addChild(this.continue,10);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.game.world.removeChild(this.background);
    }
});

game.PretestScreen.Back = me.GUI_Object.extend({
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

game.PretestScreen.Hint = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.PretestScreen.Answer = me.GUI_Object.extend({
    init:function(x,y){

    },

    onClick:function(event){
        
    }
});

game.PretestScreen.Continue = me.GUI_Object.extend({
    init:function (x, y,settings)
    {
        settings.image = "continue-button";
        settings.framewidth = 620;
        settings.frameheight = 150;
        // super constructor
        this._super(me.GUI_Object, "init", [x, y, settings]);
        // define the object z order
        this.pos.z = 4;
        this.anchorPoint.set(0,0);
        this.screen = settings.screen;
    },

    // output something in the console
    // when the object is clicked
    onClick:function (event)
    {   
        me.game.world.removeChild(this.screen.background);
        this.screen.background = new me.ImageLayer(0,0,{image:'pretest-01'});
        var viewport = me.game.viewport;
        var width = viewport.width;
        var height = viewport.height;
        this.screen.input = new game.PretestScreen.Input(110,height/2-90);
        this.screen.back = new game.PretestScreen.Back(40,20);
        me.game.world.addChild(this.screen.background,6);
        me.game.world.addChild(this.screen.back,7);
        me.game.world.addChild(this.screen.input,7);
        me.game.world.removeChild(this);
        return false;
    }
});

game.PretestScreen.Input = me.GUI_Object.extend({
    init:function (x, y)
    {
        var settings = {};
        settings.image = "input";
        settings.framewidth = 860;
        settings.frameheight = 490;
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
        console.log("input");
        return false;
    }
});