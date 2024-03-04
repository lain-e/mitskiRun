
if (typeof gdjs.evtsExt__WithThreeJS__Create3DGroup !== "undefined") {
  gdjs.evtsExt__WithThreeJS__Create3DGroup.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__WithThreeJS__Create3DGroup = {};


gdjs.evtsExt__WithThreeJS__Create3DGroup.userFunc0xa54f08 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
const Scene = gdjs.__WithThreeJS.get("Scene");
const Id = eventsFunctionContext.getArgument("Id");
const X = eventsFunctionContext.getArgument("X");
const Y = eventsFunctionContext.getArgument("Y");
const Z = eventsFunctionContext.getArgument("Z");
const Group = new THREE.Group();
Group.position.set(X, Y, Z);
Group.name = Id;
Scene.add(Group);


};
gdjs.evtsExt__WithThreeJS__Create3DGroup.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__WithThreeJS__Create3DGroup.userFunc0xa54f08(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__Create3DGroup.func = function(runtimeScene, Id, X, Y, Z, parentEventsFunctionContext) {
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Z") return Z;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__WithThreeJS__Create3DGroup.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__WithThreeJS__Create3DGroup.registeredGdjsCallbacks = [];