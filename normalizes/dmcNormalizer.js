import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl } from "../constants.js";


function DMCNormalizer() {}
DMCNormalizer.prototype = Object.create(Normalizer.prototype);
DMCNormalizer.prototype.normalize = function(dmcId, name, images, additionalinfo) {
  const normalizedObject = {
    dmcId: String(dmcId),
    name,
    images: {
      logo: defaultImagesUrl.includes(images.logo.url) ? '' : images.logo.url,
      photo: defaultImagesUrl.includes(images.photo.url) ? '' : images.photo.url
    }
  };

  if (additionalinfo !== undefined) {
    normalizedObject.associateImages = additionalinfo
      .filter(association => association.image !== undefined && association.image.url !== undefined)
      .map(association => ({
        name: association.name,
        url: association.image.url
      }));
  
    if (normalizedObject.associateImages.length === 0) {
      delete normalizedObject.associateImages;
    }
  }

  if(normalizedObject.images.logo == '') delete normalizedObject.images.logo;
  if(normalizedObject.images.photo == '') delete normalizedObject.images.photo

    return normalizedObject;
};

export { DMCNormalizer }

