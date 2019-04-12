/*
* name;
*/
class baseUnit extends Laya.Component{

/****************************************************************** 以下基础属性 ******************************************************************/

    protected _data:SeUnitType;

    constructor(data:SeUnitType){
        super();
        this._data = data;
        this._init()
    }

    protected _init()
    {
        //创建时初始化固定属性
        
    }

    protected _update(info:any)
    {
        
    }
}

