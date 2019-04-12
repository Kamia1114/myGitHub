/*
* 游戏主场景
*/
class GameScene{

    private _map: Laya.Component // 场景底
    private _sp: Laya.Particle2D;

    constructor(){
        this.init()
    }

    private init()
    {
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.bgColor = "#232628";
        Laya.loader.load("particles/star.part", Laya.Handler.create(this, this.onAssetsLoaded), null, Laya.Loader.JSON);
    }

    public onAssetsLoaded(settings: Laya.ParticleSetting): void {
        this._sp = new Laya.Particle2D(settings);
        this._sp.emitter.start();
        this._sp.play();
        Laya.stage.addChild(this._sp);
        this._sp.x = Laya.stage.width / 2;
        this._sp.y = Laya.stage.height / 2;
        let sp = this._sp;

        let txt :Laya.Label = new Laya.Label();
        txt.color = "#FFFFFF";
        txt.fontSize = 34;
        txt.x = Laya.stage.width / 2;
        txt.y = Laya.stage.height / 2;
        txt.text = "点击任意 开始游戏"
        Laya.stage.on(Laya.Event.CLICK, this, this.GameStart)
    }

    public GameStart()
    {
        //开始游戏的主循环
        Laya.timer.frameLoop(50, this, this.onLoop );

        
    }

    private onLoop()
    {
        
    }
}