gdjs.video_461Code = {};
gdjs.video_461Code.localVariables = [];
gdjs.video_461Code.GDNewVideoObjects1= [];
gdjs.video_461Code.GDNewVideoObjects2= [];
gdjs.video_461Code.GDNewTextObjects1= [];
gdjs.video_461Code.GDNewTextObjects2= [];
gdjs.video_461Code.GDNewButtonObjects1= [];
gdjs.video_461Code.GDNewButtonObjects2= [];
gdjs.video_461Code.GDmegObjects1= [];
gdjs.video_461Code.GDmegObjects2= [];
gdjs.video_461Code.GDtexto_9595morse2Objects1= [];
gdjs.video_461Code.GDtexto_9595morse2Objects2= [];
gdjs.video_461Code.GDboton6Objects1= [];
gdjs.video_461Code.GDboton6Objects2= [];
gdjs.video_461Code.GDmeg2Objects1= [];
gdjs.video_461Code.GDmeg2Objects2= [];
gdjs.video_461Code.GDatrasObjects1= [];
gdjs.video_461Code.GDatrasObjects2= [];


gdjs.video_461Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.video_461Code.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.video_461Code.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.video_461Code.GDNewButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.video_461Code.GDNewButtonObjects1[k] = gdjs.video_461Code.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.video_461Code.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.video_461Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.video_461Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.video_461Code.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.video_461Code.GDatrasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.video_461Code.GDatrasObjects1.length;i<l;++i) {
    if ( gdjs.video_461Code.GDatrasObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.video_461Code.GDatrasObjects1[k] = gdjs.video_461Code.GDatrasObjects1[i];
        ++k;
    }
}
gdjs.video_461Code.GDatrasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.video_461Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.video_461Code.GDNewVideoObjects1.length = 0;
gdjs.video_461Code.GDNewVideoObjects2.length = 0;
gdjs.video_461Code.GDNewTextObjects1.length = 0;
gdjs.video_461Code.GDNewTextObjects2.length = 0;
gdjs.video_461Code.GDNewButtonObjects1.length = 0;
gdjs.video_461Code.GDNewButtonObjects2.length = 0;
gdjs.video_461Code.GDmegObjects1.length = 0;
gdjs.video_461Code.GDmegObjects2.length = 0;
gdjs.video_461Code.GDtexto_9595morse2Objects1.length = 0;
gdjs.video_461Code.GDtexto_9595morse2Objects2.length = 0;
gdjs.video_461Code.GDboton6Objects1.length = 0;
gdjs.video_461Code.GDboton6Objects2.length = 0;
gdjs.video_461Code.GDmeg2Objects1.length = 0;
gdjs.video_461Code.GDmeg2Objects2.length = 0;
gdjs.video_461Code.GDatrasObjects1.length = 0;
gdjs.video_461Code.GDatrasObjects2.length = 0;

gdjs.video_461Code.eventsList0(runtimeScene);
gdjs.video_461Code.GDNewVideoObjects1.length = 0;
gdjs.video_461Code.GDNewVideoObjects2.length = 0;
gdjs.video_461Code.GDNewTextObjects1.length = 0;
gdjs.video_461Code.GDNewTextObjects2.length = 0;
gdjs.video_461Code.GDNewButtonObjects1.length = 0;
gdjs.video_461Code.GDNewButtonObjects2.length = 0;
gdjs.video_461Code.GDmegObjects1.length = 0;
gdjs.video_461Code.GDmegObjects2.length = 0;
gdjs.video_461Code.GDtexto_9595morse2Objects1.length = 0;
gdjs.video_461Code.GDtexto_9595morse2Objects2.length = 0;
gdjs.video_461Code.GDboton6Objects1.length = 0;
gdjs.video_461Code.GDboton6Objects2.length = 0;
gdjs.video_461Code.GDmeg2Objects1.length = 0;
gdjs.video_461Code.GDmeg2Objects2.length = 0;
gdjs.video_461Code.GDatrasObjects1.length = 0;
gdjs.video_461Code.GDatrasObjects2.length = 0;


return;

}

gdjs['video_461Code'] = gdjs.video_461Code;
