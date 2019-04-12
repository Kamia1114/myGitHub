interface SeWhaleUnitType extends SeUnitType {
    /** 外形皮肤 */
    skin: string;
    /** 我跟随的id */
    followId: number;
    /** 我的跟随者 */
    attendant: number;
    /** 是否是我自己 */
    isSelf: boolean;
}

interface SeUnitType {
    /** 单位id */
    kId: number;
    /** 单位位置 */
    point: Laya.Point;
    /** 单位角度 分割36份 0-35 */
    angle: number;
    /** 加速度 */
    inertia: number;
    /** 当前速度 */
    speed: number;
}