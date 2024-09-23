gdjs.ecenasCode = {};
gdjs.ecenasCode.localVariables = [];
gdjs.ecenasCode.GDNewTextObjects1= [];
gdjs.ecenasCode.GDNewTextObjects2= [];
gdjs.ecenasCode.GDNewSpriteObjects1= [];
gdjs.ecenasCode.GDNewSpriteObjects2= [];
gdjs.ecenasCode.GDNewSprite2Objects1= [];
gdjs.ecenasCode.GDNewSprite2Objects2= [];
gdjs.ecenasCode.GDmegObjects1= [];
gdjs.ecenasCode.GDmegObjects2= [];
gdjs.ecenasCode.GDtexto_9595morse2Objects1= [];
gdjs.ecenasCode.GDtexto_9595morse2Objects2= [];
gdjs.ecenasCode.GDboton6Objects1= [];
gdjs.ecenasCode.GDboton6Objects2= [];
gdjs.ecenasCode.GDmeg2Objects1= [];
gdjs.ecenasCode.GDmeg2Objects2= [];
gdjs.ecenasCode.GDatrasObjects1= [];
gdjs.ecenasCode.GDatrasObjects2= [];


gdjs.ecenasCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.ecenasCode.GDatrasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ecenasCode.GDatrasObjects1.length;i<l;++i) {
    if ( gdjs.ecenasCode.GDatrasObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ecenasCode.GDatrasObjects1[k] = gdjs.ecenasCode.GDatrasObjects1[i];
        ++k;
    }
}
gdjs.ecenasCode.GDatrasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.ecenasCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ecenasCode.GDNewTextObjects1.length = 0;
gdjs.ecenasCode.GDNewTextObjects2.length = 0;
gdjs.ecenasCode.GDNewSpriteObjects1.length = 0;
gdjs.ecenasCode.GDNewSpriteObjects2.length = 0;
gdjs.ecenasCode.GDNewSprite2Objects1.length = 0;
gdjs.ecenasCode.GDNewSprite2Objects2.length = 0;
gdjs.ecenasCode.GDmegObjects1.length = 0;
gdjs.ecenasCode.GDmegObjects2.length = 0;
gdjs.ecenasCode.GDtexto_9595morse2Objects1.length = 0;
gdjs.ecenasCode.GDtexto_9595morse2Objects2.length = 0;
gdjs.ecenasCode.GDboton6Objects1.length = 0;
gdjs.ecenasCode.GDboton6Objects2.length = 0;
gdjs.ecenasCode.GDmeg2Objects1.length = 0;
gdjs.ecenasCode.GDmeg2Objects2.length = 0;
gdjs.ecenasCode.GDatrasObjects1.length = 0;
gdjs.ecenasCode.GDatrasObjects2.length = 0;

gdjs.ecenasCode.eventsList0(runtimeScene);
gdjs.ecenasCode.GDNewTextObjects1.length = 0;
gdjs.ecenasCode.GDNewTextObjects2.length = 0;
gdjs.ecenasCode.GDNewSpriteObjects1.length = 0;
gdjs.ecenasCode.GDNewSpriteObjects2.length = 0;
gdjs.ecenasCode.GDNewSprite2Objects1.length = 0;
gdjs.ecenasCode.GDNewSprite2Objects2.length = 0;
gdjs.ecenasCode.GDmegObjects1.length = 0;
gdjs.ecenasCode.GDmegObjects2.length = 0;
gdjs.ecenasCode.GDtexto_9595morse2Objects1.length = 0;
gdjs.ecenasCode.GDtexto_9595morse2Objects2.length = 0;
gdjs.ecenasCode.GDboton6Objects1.length = 0;
gdjs.ecenasCode.GDboton6Objects2.length = 0;
gdjs.ecenasCode.GDmeg2Objects1.length = 0;
gdjs.ecenasCode.GDmeg2Objects2.length = 0;
gdjs.ecenasCode.GDatrasObjects1.length = 0;
gdjs.ecenasCode.GDatrasObjects2.length = 0;


return;

}

gdjs['ecenasCode'] = gdjs.ecenasCode;
