enum Define {
    stageWidth = 750,
    stageHeight = 1334,
}

enum GameStep {
    Login = 1 << 0,
    TableLoad = 1 << 1,
    SceneLoad = 1 << 2,
    UiDataLoad = 1 << 3,
    All = Login | TableLoad | SceneLoad | UiDataLoad
}