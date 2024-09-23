gdjs.inisioCode = {};
gdjs.inisioCode.localVariables = [];
gdjs.inisioCode.GDNewTextInputObjects1= [];
gdjs.inisioCode.GDNewTextInputObjects2= [];
gdjs.inisioCode.GDNewTextObjects1= [];
gdjs.inisioCode.GDNewTextObjects2= [];
gdjs.inisioCode.GDmegObjects1= [];
gdjs.inisioCode.GDmegObjects2= [];
gdjs.inisioCode.GDtexto_9595morse2Objects1= [];
gdjs.inisioCode.GDtexto_9595morse2Objects2= [];
gdjs.inisioCode.GDboton6Objects1= [];
gdjs.inisioCode.GDboton6Objects2= [];
gdjs.inisioCode.GDmeg2Objects1= [];
gdjs.inisioCode.GDmeg2Objects2= [];
gdjs.inisioCode.GDatrasObjects1= [];
gdjs.inisioCode.GDatrasObjects2= [];


gdjs.inisioCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.inisioCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inisioCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.inisioCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "MEG.TEST.AREA.1" ) {
        isConditionTrue_0 = true;
        gdjs.inisioCode.GDNewTextInputObjects1[k] = gdjs.inisioCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.inisioCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.inisioCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.inisioCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.inisioCode.GDNewTextObjects1[i].getBehavior("Text").setText("cuenta encontrada");
}
}{for(var i = 0, len = gdjs.inisioCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.inisioCode.GDNewTextObjects1[i].setColor("0;182;11");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.inisioCode.GDNewTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton6"), gdjs.inisioCode.GDboton6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inisioCode.GDboton6Objects1.length;i<l;++i) {
    if ( gdjs.inisioCode.GDboton6Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.inisioCode.GDboton6Objects1[k] = gdjs.inisioCode.GDboton6Objects1[i];
        ++k;
    }
}
gdjs.inisioCode.GDboton6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.inisioCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.inisioCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "MEG.TEST.AREA.1" ) {
        isConditionTrue_0 = true;
        gdjs.inisioCode.GDNewTextInputObjects1[k] = gdjs.inisioCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.inisioCode.GDNewTextInputObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Untitled scene");
}}

}


};

gdjs.inisioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.inisioCode.GDNewTextInputObjects1.length = 0;
gdjs.inisioCode.GDNewTextInputObjects2.length = 0;
gdjs.inisioCode.GDNewTextObjects1.length = 0;
gdjs.inisioCode.GDNewTextObjects2.length = 0;
gdjs.inisioCode.GDmegObjects1.length = 0;
gdjs.inisioCode.GDmegObjects2.length = 0;
gdjs.inisioCode.GDtexto_9595morse2Objects1.length = 0;
gdjs.inisioCode.GDtexto_9595morse2Objects2.length = 0;
gdjs.inisioCode.GDboton6Objects1.length = 0;
gdjs.inisioCode.GDboton6Objects2.length = 0;
gdjs.inisioCode.GDmeg2Objects1.length = 0;
gdjs.inisioCode.GDmeg2Objects2.length = 0;
gdjs.inisioCode.GDatrasObjects1.length = 0;
gdjs.inisioCode.GDatrasObjects2.length = 0;

gdjs.inisioCode.eventsList0(runtimeScene);
gdjs.inisioCode.GDNewTextInputObjects1.length = 0;
gdjs.inisioCode.GDNewTextInputObjects2.length = 0;
gdjs.inisioCode.GDNewTextObjects1.length = 0;
gdjs.inisioCode.GDNewTextObjects2.length = 0;
gdjs.inisioCode.GDmegObjects1.length = 0;
gdjs.inisioCode.GDmegObjects2.length = 0;
gdjs.inisioCode.GDtexto_9595morse2Objects1.length = 0;
gdjs.inisioCode.GDtexto_9595morse2Objects2.length = 0;
gdjs.inisioCode.GDboton6Objects1.length = 0;
gdjs.inisioCode.GDboton6Objects2.length = 0;
gdjs.inisioCode.GDmeg2Objects1.length = 0;
gdjs.inisioCode.GDmeg2Objects2.length = 0;
gdjs.inisioCode.GDatrasObjects1.length = 0;
gdjs.inisioCode.GDatrasObjects2.length = 0;


return;

}

gdjs['inisioCode'] = gdjs.inisioCode;
