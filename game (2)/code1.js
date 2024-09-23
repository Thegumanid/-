gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDbotonObjects1= [];
gdjs.Untitled_32sceneCode.GDbotonObjects2= [];
gdjs.Untitled_32sceneCode.GDboton2Objects1= [];
gdjs.Untitled_32sceneCode.GDboton2Objects2= [];
gdjs.Untitled_32sceneCode.GDboton3Objects1= [];
gdjs.Untitled_32sceneCode.GDboton3Objects2= [];
gdjs.Untitled_32sceneCode.GDboton4Objects1= [];
gdjs.Untitled_32sceneCode.GDboton4Objects2= [];
gdjs.Untitled_32sceneCode.GDboton5Objects1= [];
gdjs.Untitled_32sceneCode.GDboton5Objects2= [];
gdjs.Untitled_32sceneCode.GDtexto_9595morseObjects1= [];
gdjs.Untitled_32sceneCode.GDtexto_9595morseObjects2= [];
gdjs.Untitled_32sceneCode.GDmegObjects1= [];
gdjs.Untitled_32sceneCode.GDmegObjects2= [];
gdjs.Untitled_32sceneCode.GDtexto_9595morse2Objects1= [];
gdjs.Untitled_32sceneCode.GDtexto_9595morse2Objects2= [];
gdjs.Untitled_32sceneCode.GDboton6Objects1= [];
gdjs.Untitled_32sceneCode.GDboton6Objects2= [];
gdjs.Untitled_32sceneCode.GDmeg2Objects1= [];
gdjs.Untitled_32sceneCode.GDmeg2Objects2= [];
gdjs.Untitled_32sceneCode.GDatrasObjects1= [];
gdjs.Untitled_32sceneCode.GDatrasObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playSound(runtimeScene, "radio-static-6382.mp3", true, 1000, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton"), gdjs.Untitled_32sceneCode.GDbotonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbotonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbotonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDbotonObjects1[k] = gdjs.Untitled_32sceneCode.GDbotonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbotonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://en.wikipedia.org/wiki/Eye_of_Providence", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton3"), gdjs.Untitled_32sceneCode.GDboton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDboton3Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDboton3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDboton3Objects1[k] = gdjs.Untitled_32sceneCode.GDboton3Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDboton3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/watch?v=mOYZaiDZ7BM", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boton4"), gdjs.Untitled_32sceneCode.GDboton4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDboton4Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDboton4Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDboton4Objects1[k] = gdjs.Untitled_32sceneCode.GDboton4Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDboton4Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "nuevacenea");
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDbotonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbotonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDboton2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDboton2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDboton3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDboton3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDboton4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDboton4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDboton5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDboton5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDtexto_9595morseObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtexto_9595morseObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDmegObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDmegObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtexto_9595morse2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDtexto_9595morse2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDboton6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDboton6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDmeg2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDmeg2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDatrasObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDatrasObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDbotonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbotonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDboton2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDboton2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDboton3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDboton3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDboton4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDboton4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDboton5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDboton5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDtexto_9595morseObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDtexto_9595morseObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDmegObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDmegObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDtexto_9595morse2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDtexto_9595morse2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDboton6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDboton6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDmeg2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDmeg2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDatrasObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDatrasObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
