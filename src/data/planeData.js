import planeData from './planes.json';
// import { getFromLocalStorage } from './localStorage';
// import { localStoreVars } from '../GlobalVars';

// console.log(planeData);

function combinePlaneData(m) {
  const plane = m;

  if (typeof plane.brandID === 'string') {
    const brandIndex = planeData.brands.findIndex((b) => b.id === m.brandID);
    plane.brand = planeData.brands[brandIndex];
  } else if (typeof m.brand === 'string') {
    const brandIndex = planeData.brands.findIndex((b) => b.id === m.brand);
    plane.brand = planeData.brands[brandIndex];
  }

  if (typeof m.engineType !== 'undefined') {
    const engineIndex = planeData.engines.findIndex((e) => e.id === m.engineType);
    plane.engine = planeData.engines[engineIndex];
  }

  const classIndex = planeData.planeTypes.findIndex((c) => c.id === m.classID);
  plane.class = planeData.planeTypes[classIndex];

  return plane;
}

export function getAllPlaneBrands() {
  return planeData.brands;
}

export function getAllPlanesModels() {
  const models = [...planeData.models];

  models.map(combinePlaneData);

  return models;
}

export function getPlaneByModel(modelID, type = 'cargo') {
  const modelIndex = planeData.models.findIndex((m) => m.modelName.toLowerCase() === modelID.toLowerCase());
  const model = combinePlaneData(planeData.models[modelIndex]);

  if (model.types.indexOf(type)) {
    console.log(model);
    for (const [key, value] of Object.entries(model.class[type])) {
      model[key] = [];
      model[`${key}MaxLength`] = value;
    }
  } else {
    return 'Error';
  }

  return model;
}

export function getPlaneByID(planeRegistrationNumber) {
  // console.log(planeRegistrationNumber)
  const allPlanes = getFromLocalStorage(localStoreVars.fleet);
  const thisPlaneIndex = allPlanes.findIndex((m) => m.registrationNumber.toLowerCase() === planeRegistrationNumber.toLowerCase());
  const thisPlane = allPlanes[thisPlaneIndex];
  const modelIndex = planeData.models.findIndex((m) => m.modelName.toLowerCase() === thisPlane.modelName.toLowerCase());
  const modelFromDB = combinePlaneData(planeData.models[modelIndex]);
  const model = { ...thisPlane, ...modelFromDB };

  console.log(model);

  return { plane: model, planeIndex: thisPlaneIndex };
}
