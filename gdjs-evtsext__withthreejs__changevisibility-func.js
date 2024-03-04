
if (typeof gdjs.evtsExt__WithThreeJS__ChangeVisibility !== "undefined") {
  gdjs.evtsExt__WithThreeJS__ChangeVisibility.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__ChangeVisibility = {};


gdjs.evtsExt__WithThreeJS__ChangeVisibility.userFunc0xbf40c8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
//
const Id = eventsFunctionContext.getArgument("Id");
const Visible = eventsFunctionContext.getArgument("Visible");
const Inherit = eventsFunctionContext.getArgument("Inherit");
//
const Obj = Scene.getObjectByName(Id);
if (!Obj) {
    console.warn("3D Object not found: " + Id);
    return;
}
//
if (Inherit) {
    Obj.visible = Visible;
} else {
    if (Obj.material) {
        if (Array.isArray(Obj.material)) {
            for (let i = 0; i < Obj.material.length; i++) {
                Obj.material[i].visible = Visible;
            }
        } else {
            Obj.material.visible = Visible;
        }
    } else {
        // Obj.visible = Visible;
    }
}


};
gdjs.evtsExt__WithThreeJS__ChangeVisibility.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__ChangeVisibility.userFunc0xbf40c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__ChangeVisibility.func = function(runtimeScene, Id, Visible, Inherit, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Id") return Id;
if (argName === "Visible") return Visible;
if (argName === "Inherit") return Inherit;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__ChangeVisibility.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__ChangeVisibility.registeredGdjsCallbacks = [];