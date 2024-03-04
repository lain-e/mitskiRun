
gdjs.evtsExt__WithThreeJS__EnableWithThreeJS = gdjs.evtsExt__WithThreeJS__EnableWithThreeJS || {};

/**
 * Object generated from Enable WithThreeJS
 */
gdjs.evtsExt__WithThreeJS__EnableWithThreeJS.EnableWithThreeJS = class EnableWithThreeJS extends gdjs.CustomRuntimeObject {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
}

// Methods:

gdjs.evtsExt__WithThreeJS__EnableWithThreeJS.EnableWithThreeJS.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("WithThreeJS::EnableWithThreeJS", gdjs.evtsExt__WithThreeJS__EnableWithThreeJS.EnableWithThreeJS);
