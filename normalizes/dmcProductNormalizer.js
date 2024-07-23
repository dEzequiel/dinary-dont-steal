import { Normalizer } from "./base/base_normalizer.js";
import { commonCharsOnImages } from "../constants.js";


function DMCProductNormalizer() {}

DMCProductNormalizer.prototype = Object.create(Normalizer.prototype);
DMCProductNormalizer.prototype.normalize = function(dmcId, name, image, dmcName, itinerary) {
  const normalizedObject = {
    dmcId: String(dmcId),
    name: name.replace(commonCharsOnImages, "_"),
    image: {
      ...image
    },
    dmcName: dmcName.replace(commonCharsOnImages, "_")
  };

  if (itinerary !== undefined) {
    normalizedObject.itinerary = itinerary.filter(day => day.image !== undefined && day.image.url !== undefined)
    .map(day => ({
      title: day.title ? day.title.replace(commonCharsOnImages, "_") : '',
      url: day.image.url
    }));

    if (normalizedObject.itinerary.length === 0 ) {
      delete normalizedObject.itinerary;
    }

    if (normalizedObject.itinerary) {
      normalizedObject.itinerary = normalizedObject.itinerary.filter(day => day.url !== '');
    }

  }

  return normalizedObject;

};

export { DMCProductNormalizer }