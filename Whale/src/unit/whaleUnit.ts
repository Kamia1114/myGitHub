/*
* name;
*/
class whaleUnit extends baseUnit{
    
    protected _data:SeWhaleUnitType;

    private _body:Laya.Image;
    private _isSelf:boolean;

    constructor(data:SeWhaleUnitType){
        super(data);
    }

    protected _init()
    {
        
    }

    protected _update(info:any)
    {
        for (var key in info){
            this._wData[key] = info[key];
        }
    }
}