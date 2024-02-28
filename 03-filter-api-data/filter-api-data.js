function filterApiData(apiData, mandatoryKeys) {
  let result = [];
  for (let i = 0; i < apiData.length; i++) {
    let daten = apiData[i];

    let allesda = true;

    for (let j = 0; j < mandatoryKeys.length; j++) {
      let key = mandatoryKeys[j];
      if (!daten.hasOwnProperty(key)) {
        allesda = false;
        break;
      }
    }
    if (allesda) {
      result.push(daten);
    }
  }
  return result;
}
