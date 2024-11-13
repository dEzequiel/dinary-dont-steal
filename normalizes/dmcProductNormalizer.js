import { Normalizer } from "./base/base_normalizer.js";
import { commonCharsOnImages } from "../constants.js";
import { determineImageUrl } from "../utils/helper.js";

function DMCProductNormalizer() {}

DMCProductNormalizer.prototype = Object.create(Normalizer.prototype);
DMCProductNormalizer.prototype.normalize = function(_id, dmcId, name, image, dmcName, itinerary) {
  const normalizedObject = {
    id: String(_id),
    dmcId: String(dmcId),
    name: name.replace(commonCharsOnImages, "_"),
    dmcName: dmcName.replace(commonCharsOnImages, "_")
  };

  if(image) {
    normalizedObject.image = { url: determineImageUrl(image.url) };
  }

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