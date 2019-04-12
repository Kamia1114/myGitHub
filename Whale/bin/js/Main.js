// 程序入口
//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//
//
//
var GameMain = /** @class */ (function () {
    function GameMain() {
        // 登录进度
        this._stepFlag = 0;
        // 加载结果
        this._isGameStart = false;
        Config.isAlpha = true;
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        Laya.stage.scaleMode = "showall";
        Laya.stage.frameRate = "mouse";
        Laya.stage.alignH = "center";
        Laya.stage.alignV = "middle";
        // laya.debug.DebugTool.init();
        Laya.Stat.show();
        this.enterGame();
    }
    Object.defineProperty(GameMain.prototype, "flag", {
        get: function () {
            return this._stepFlag;
        },
        set: function (val) {
            this._stepFlag |= val;
            console.log("val: " + val + " ,now load step: ", this._stepFlag);
            if (this._stepFlag == GameStep.All) {
                this._isGameStart = true;
                this.enterGame();
            }
        },
        enumerable: true,
        configurable: true
    });
    GameMain.prototype.enterGame = function () {
        new GameScene();
        // 显示loading 界面
        this._showLoading();
    };
    /**
 *
 * @param sceneType 当前加载的场景类型
 * @param isShow     true --> 显示，  false --> 隐藏
 */
    GameMain.prototype._showLoading = function () {
    };
    return GameMain;
}());
var client;
//初始化微信小游戏
Laya.MiniAdpter.init();
Laya.init(Define.stageWidth, Define.stageHeight, Laya.WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Laya.Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad() {
    this.onLoaded();
    // Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}
function onLoaded() {
    //实例UI界面
    client = new GameMain();
}
//# sourceMappingURL=Main.js.map