
/* Game namespace */
var game = {

    // an object where to store game information
    data : {
        // score
        score : 0
    },


    // Run on page load.
    "onload" : function () {
        // Initialize the video.
        if (!me.video.init(1080, 1920, {wrapper : "screen", scale : "auto"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // set and load all resources.
        // (this will also automatically switch to the loading screen)
        me.loader.preload(game.resources, this.loaded.bind(this));
    },

    // Run on game resources loaded.
    "loaded" : function () {

        me.state.LOAD = me.state.SETTINGS + 1;
        me.state.ASK_LOGIN = me.state.SETTINGS + 2;
        me.state.LOGIN = me.state.SETTINGS + 3;
        me.state.PRETEST = me.state.SETTINGS + 4;
        me.state.AVATAR = me.state.SETTINGS + 5;

        me.state.set(me.state.MENU, new game.MenuScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());
        me.state.set(me.state.LOAD, new game.LoadingScreen());
        me.state.set(me.state.ASK_LOGIN, new game.AskLoginScreen());
        me.state.set(me.state.LOGIN, new game.LoginScreen());
        me.state.set(me.state.PRETEST, new game.PretestScreen());
        me.state.set(me.state.AVATAR, new game.AvatarScreen());

        // add our player entity in the entity pool
        me.pool.register("mainPlayer", game.PlayerEntity);

        // Start the game.
        me.state.change(me.state.MENU);
    }
};
