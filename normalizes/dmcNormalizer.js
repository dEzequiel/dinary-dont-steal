import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl, commonCharsOnImages } from "../constants.js";


function DMCNormalizer() {}
DMCNormalizer.prototype = Object.create(Normalizer.prototype);
DMCNormalizer.prototype.normalize = function(dmcId, name, images, additionalinfo, tourEscorts) {
  const normalizedObject = {
    dmcId: String(dmcId),
    name: name.replace(/[\/\\]/g, "_"),
    images: {
      logo: defaultImagesUrl.includes(images.logo.url) ? '' : images.logo.url,
      photo: defaultImagesUrl.includes(images.photo.url) ? '' : images.photo.url
    }
  };

  if(normalizedObject.images.logo == '') delete normalizedObject.images.logo;
  if(normalizedObject.images.photo == '') delete normalizedObject.images.photo

  if (additionalinfo !== undefined) {
    normalizedObject.associateImages = additionalinfo
      .filter(association => association.image !== undefined && association.image.url !== undefined)
      .map(association => ({
        name: association.name ? association.name.replace(commonCharsOnImages, "_") : '',
        url: association.image.url
      }));
  
    if (normalizedObject.associateImages.length === 0 ) {
      delete normalizedObject.associateImages;
    }

    if (normalizedObject.associateImages) {
      normalizedObject.associateImages = normalizedObject.associateImages.filter(association => association.url !== '');
    }
  }

  if(tourEscorts !== undefined) {
    normalizedObject.tourEscorts = tourEscorts
    .filter(tour => tour.image !== undefined && tour.image.url !== undefined)
    .map(tour => ({
      name: tour.name ? tour.name.replace(commonCharsOnImages, "_") : '',
      url: tour.image.url
    }));
  }

  if(normalizedObject.tourEscorts && normalizedObject.tourEscorts.length === 0) {
    delete normalizedObject.tourEscorts;
  }

  if (normalizedObject.tourEscorts) {
    normalizedObject.tourEscorts = normalizedObject.tourEscorts.filter(tour => tour.url !== '');
  }

  return normalizedObject;
};

export { DMCNormalizer }

