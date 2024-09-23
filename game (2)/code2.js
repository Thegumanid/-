gdjs.nuevaceneaCode = {};
gdjs.nuevaceneaCode.localVariables = [];
gdjs.nuevaceneaCode.GDNewTextInputObjects1= [];
gdjs.nuevaceneaCode.GDNewTextInputObjects2= [];
gdjs.nuevaceneaCode.GDNewTextObjects1= [];
gdjs.nuevaceneaCode.GDNewTextObjects2= [];
gdjs.nuevaceneaCode.GDmegObjects1= [];
gdjs.nuevaceneaCode.GDmegObjects2= [];
gdjs.nuevaceneaCode.GDtexto_9595morse2Objects1= [];
gdjs.nuevaceneaCode.GDtexto_9595morse2Objects2= [];
gdjs.nuevaceneaCode.GDboton6Objects1= [];
gdjs.nuevaceneaCode.GDboton6Objects2= [];
gdjs.nuevaceneaCode.GDmeg2Objects1= [];
gdjs.nuevaceneaCode.GDmeg2Objects2= [];
gdjs.nuevaceneaCode.GDatrasObjects1= [];
gdjs.nuevaceneaCode.GDatrasObjects2= [];


gdjs.nuevaceneaCode.asyncCallback9661420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.nuevaceneaCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "ecenas");
}gdjs.nuevaceneaCode.localVariables.length = 0;
}
gdjs.nuevaceneaCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.nuevaceneaCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.nuevaceneaCode.asyncCallback9661420(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.nuevaceneaCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.nuevaceneaCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nuevaceneaCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.nuevaceneaCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "anomaly" ) {
        isConditionTrue_0 = true;
        gdjs.nuevaceneaCode.GDNewTextInputObjects1[k] = gdjs.nuevaceneaCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.nuevaceneaCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.nuevaceneaCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.nuevaceneaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.nuevaceneaCode.GDNewTextObjects1[i].getBehavior("Text").setText("contraseña correcta");
}
}{for(var i = 0, len = gdjs.nuevaceneaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.nuevaceneaCode.GDNewTextObjects1[i].setColor("0;116;23");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.nuevaceneaCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nuevaceneaCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.nuevaceneaCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() != "anomaly" ) {
        isConditionTrue_0 = true;
        gdjs.nuevaceneaCode.GDNewTextInputObjects1[k] = gdjs.nuevaceneaCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.nuevaceneaCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.nuevaceneaCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.nuevaceneaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.nuevaceneaCode.GDNewTextObjects1[i].getBehavior("Text").setText("contraseña incorrecta");
}
}{for(var i = 0, len = gdjs.nuevaceneaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.nuevaceneaCode.GDNewTextObjects1[i].setColor("172;28;30");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.nuevaceneaCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nuevaceneaCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.nuevaceneaCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() != "VIDEO.3328.AREA.1.mp4" ) {
        isConditionTrue_0 = true;
        gdjs.nuevaceneaCode.GDNewTextInputObjects1[k] = gdjs.nuevaceneaCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.nuevaceneaCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.nuevaceneaCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.nuevaceneaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.nuevaceneaCode.GDNewTextObjects1[i].getBehavior("Text").setText("contraseña incorrecta");
}
}{for(var i = 0, len = gdjs.nuevaceneaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.nuevaceneaCode.GDNewTextObjects1[i].setColor("172;28;30");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.nuevaceneaCode.GDNewTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton6"), gdjs.nuevaceneaCode.GDboton6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nuevaceneaCode.GDboton6Objects1.length;i<l;++i) {
    if ( gdjs.nuevaceneaCode.GDboton6Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.nuevaceneaCode.GDboton6Objects1[k] = gdjs.nuevaceneaCode.GDboton6Objects1[i];
        ++k;
    }
}
gdjs.nuevaceneaCode.GDboton6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nuevaceneaCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.nuevaceneaCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "anomaly" ) {
        isConditionTrue_0 = true;
        gdjs.nuevaceneaCode.GDNewTextInputObjects1[k] = gdjs.nuevaceneaCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.nuevaceneaCode.GDNewTextInputObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.nuevaceneaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("atras"), gdjs.nuevaceneaCode.GDatrasObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nuevaceneaCode.GDatrasObjects1.length;i<l;++i) {
    if ( gdjs.nuevaceneaCode.GDatrasObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.nuevaceneaCode.GDatrasObjects1[k] = gdjs.nuevaceneaCode.GDatrasObjects1[i];
        ++k;
    }
}
gdjs.nuevaceneaCode.GDatrasObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.nuevaceneaCode.GDNewTextInputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nuevaceneaCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.nuevaceneaCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "VIDEO.3328.AREA.1.mp4" ) {
        isConditionTrue_0 = true;
        gdjs.nuevaceneaCode.GDNewTextInputObjects1[k] = gdjs.nuevaceneaCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.nuevaceneaCode.GDNewTextInputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.nuevaceneaCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.nuevaceneaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.nuevaceneaCode.GDNewTextObjects1[i].getBehavior("Text").setText("contraseña correcta");
}
}{for(var i = 0, len = gdjs.nuevaceneaCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.nuevaceneaCode.GDNewTextObjects1[i].setColor("0;116;23");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.nuevaceneaCode.GDNewTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("boton6"), gdjs.nuevaceneaCode.GDboton6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nuevaceneaCode.GDboton6Objects1.length;i<l;++i) {
    if ( gdjs.nuevaceneaCode.GDboton6Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.nuevaceneaCode.GDboton6Objects1[k] = gdjs.nuevaceneaCode.GDboton6Objects1[i];
        ++k;
    }
}
gdjs.nuevaceneaCode.GDboton6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.nuevaceneaCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.nuevaceneaCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() == "VIDEO.3328.AREA.1.mp4" ) {
        isConditionTrue_0 = true;
        gdjs.nuevaceneaCode.GDNewTextInputObjects1[k] = gdjs.nuevaceneaCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.nuevaceneaCode.GDNewTextInputObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "video.1");
}}

}


};

gdjs.nuevaceneaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.nuevaceneaCode.GDNewTextInputObjects1.length = 0;
gdjs.nuevaceneaCode.GDNewTextInputObjects2.length = 0;
gdjs.nuevaceneaCode.GDNewTextObjects1.length = 0;
gdjs.nuevaceneaCode.GDNewTextObjects2.length = 0;
gdjs.nuevaceneaCode.GDmegObjects1.length = 0;
gdjs.nuevaceneaCode.GDmegObjects2.length = 0;
gdjs.nuevaceneaCode.GDtexto_9595morse2Objects1.length = 0;
gdjs.nuevaceneaCode.GDtexto_9595morse2Objects2.length = 0;
gdjs.nuevaceneaCode.GDboton6Objects1.length = 0;
gdjs.nuevaceneaCode.GDboton6Objects2.length = 0;
gdjs.nuevaceneaCode.GDmeg2Objects1.length = 0;
gdjs.nuevaceneaCode.GDmeg2Objects2.length = 0;
gdjs.nuevaceneaCode.GDatrasObjects1.length = 0;
gdjs.nuevaceneaCode.GDatrasObjects2.length = 0;

gdjs.nuevaceneaCode.eventsList1(runtimeScene);
gdjs.nuevaceneaCode.GDNewTextInputObjects1.length = 0;
gdjs.nuevaceneaCode.GDNewTextInputObjects2.length = 0;
gdjs.nuevaceneaCode.GDNewTextObjects1.length = 0;
gdjs.nuevaceneaCode.GDNewTextObjects2.length = 0;
gdjs.nuevaceneaCode.GDmegObjects1.length = 0;
gdjs.nuevaceneaCode.GDmegObjects2.length = 0;
gdjs.nuevaceneaCode.GDtexto_9595morse2Objects1.length = 0;
gdjs.nuevaceneaCode.GDtexto_9595morse2Objects2.length = 0;
gdjs.nuevaceneaCode.GDboton6Objects1.length = 0;
gdjs.nuevaceneaCode.GDboton6Objects2.length = 0;
gdjs.nuevaceneaCode.GDmeg2Objects1.length = 0;
gdjs.nuevaceneaCode.GDmeg2Objects2.length = 0;
gdjs.nuevaceneaCode.GDatrasObjects1.length = 0;
gdjs.nuevaceneaCode.GDatrasObjects2.length = 0;


return;

}

gdjs['nuevaceneaCode'] = gdjs.nuevaceneaCode;
