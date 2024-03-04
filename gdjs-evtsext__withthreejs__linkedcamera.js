
gdjs.evtsExt__WithThreeJS__LinkedCamera = gdjs.evtsExt__WithThreeJS__LinkedCamera || {};

/**
 * Behavior generated from Linked 3D Camera
 */
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera = class LinkedCamera extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Id = behaviorData.Id !== undefined ? behaviorData.Id : Number("1") || 0;
    this._behaviorData.Fov = behaviorData.Fov !== undefined ? behaviorData.Fov : Number("50") || 0;
    this._behaviorData.LinkAngle = behaviorData.LinkAngle !== undefined ? behaviorData.LinkAngle : true;
    this._behaviorData.Hide = behaviorData.Hide !== undefined ? behaviorData.Hide : true;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Id !== newBehaviorData.Id)
      this._behaviorData.Id = newBehaviorData.Id;
    if (oldBehaviorData.Fov !== newBehaviorData.Fov)
      this._behaviorData.Fov = newBehaviorData.Fov;
    if (oldBehaviorData.LinkAngle !== newBehaviorData.LinkAngle)
      this._behaviorData.LinkAngle = newBehaviorData.LinkAngle;
    if (oldBehaviorData.Hide !== newBehaviorData.Hide)
      this._behaviorData.Hide = newBehaviorData.Hide;

    return true;
  }

  // Properties:
  
  _getId() {
    return this._behaviorData.Id !== undefined ? this._behaviorData.Id : Number("1") || 0;
  }
  _setId(newValue) {
    this._behaviorData.Id = newValue;
  }
  _getFov() {
    return this._behaviorData.Fov !== undefined ? this._behaviorData.Fov : Number("50") || 0;
  }
  _setFov(newValue) {
    this._behaviorData.Fov = newValue;
  }
  _getLinkAngle() {
    return this._behaviorData.LinkAngle !== undefined ? this._behaviorData.LinkAngle : true;
  }
  _setLinkAngle(newValue) {
    this._behaviorData.LinkAngle = newValue;
  }
  _toggleLinkAngle() {
    this._setLinkAngle(!this._getLinkAngle());
  }
  _getHide() {
    return this._behaviorData.Hide !== undefined ? this._behaviorData.Hide : true;
  }
  _setHide(newValue) {
    this._behaviorData.Hide = newValue;
  }
  _toggleHide() {
    this._setHide(!this._getHide());
  }
}

/**
 * Shared data generated from Linked 3D Camera
 */
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.SharedData = class LinkedCameraSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._WithThreeJS_LinkedCameraSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._WithThreeJS_LinkedCameraSharedData = new gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.SharedData(
      initialData
    );
  }
  return instanceContainer._WithThreeJS_LinkedCameraSharedData;
}

// Methods:
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.userFunc0x8a9798 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
if (!gdjs.__WithThreeJS.has("Renderer")) {
    console.warn("!");
    return;
}
// const Camera = gdjs.__WithThreeJS.get("Camera");
const Behavior = objects[0].getBehavior("LinkedCamera");
const Id = Behavior.Id();
const Camera = gdjs.__WithThreeJS.has("BuiltIn3dCamera") ? gdjs.__WithThreeJS.get("BuiltIn3dCamera") : gdjs.__WithThreeJS.get("GetCamera")(Id);
const Fov = Behavior.Fov();
const ProjectionScale = gdjs.__WithThreeJS.get("ProjectionScale");//Behavior.ProjectionScale();
const ViewMode = gdjs.__WithThreeJS.get("ViewMode");//Behavior.ViewMode();
const LinkAngle = Behavior.LinkAngle();
const Hide = Behavior.Hide();
const X = objects[0].getCenterXInScene();
const Y = objects[0].getCenterYInScene();
const Z = objects[0].zOrder;
//
if (ViewMode == "Top Down") {
    Camera.position.set(X * ProjectionScale, Z * ProjectionScale, Y * ProjectionScale);
} else if (ViewMode == "Side") {
    Camera.position.set(X * ProjectionScale, -Y * ProjectionScale, Z * ProjectionScale);
} else {
    Camera.position.set(X * ProjectionScale, -Y * ProjectionScale, Z * ProjectionScale);
}
//
if (LinkAngle) {
    const Angle = objects[0].angle;
    if (ViewMode == "Top Down") {
        Camera.rotation.set(gdjs.toRad(0), gdjs.toRad(Angle * -1 - 90), gdjs.toRad(0));
    } else if (ViewMode == "Side") {
        Camera.rotation.set(gdjs.toRad(-Angle), gdjs.toRad(-90), gdjs.toRad(0), "YXZ");
    } else {
        Camera.rotation.set(gdjs.toRad(90), gdjs.toRad(Angle * -1 - 90), gdjs.toRad(0), "XYZ");
    }
}
//
if (Camera.fov != Fov) {
    Camera.fov = Fov;
    Camera.updateProjectionMatrix();
}
//
objects[0].hide(Hide);


};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.userFunc0x8a9798(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.IdContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.IdContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.IdContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.IdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.IdContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.IdContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.IdContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.Id = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.IdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.IdContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.FovContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.FovContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.FovContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.FovContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.FovContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.FovContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.FovContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFov()); }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.Fov = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.FovContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.FovContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.FovContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinkAngle() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getLinkAngle()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.LinkAngleContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext = {};
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1= [];
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects2= [];


gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHide()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[k] = gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.Hide = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.HideContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("WithThreeJS::LinkedCamera", gdjs.evtsExt__WithThreeJS__LinkedCamera.LinkedCamera);
