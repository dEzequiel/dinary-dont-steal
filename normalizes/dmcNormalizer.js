import { Normalizer } from "./base/base_normalizer.js";
import { determineImageUrl } from "../utils/helper.js";
import { commonCharsOnImages } from "../constants.js";

function DMCNormalizer() {}
DMCNormalizer.prototype = Object.create(Normalizer.prototype);
DMCNormalizer.prototype.normalize = function(dmcId, name, images, additionalinfo, tourEscorts) {
  const normalizedObject = {
    dmcId: String(dmcId),
    name: name.replace(/[\/\\]/g, "_"),
  };

  if(images) {
    normalizedObject.images = {
      logo: determineImageUrl(images.logo?.url),
      photo: determineImageUrl(images.photo?.url)
    }

    if(normalizedObject.images.logo == '') delete normalizedObject.images.logo;
    if(normalizedObject.images.photo == '') delete normalizedObject.images.photo
    if(Object.keys(normalizedObject.images).length === 0) delete normalizedObject.images;
  }

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

    normalizedObject.associateImagesURLS = additionalinfo.filter(association => association.imageurl !== undefined && association.imageurl !== '')
    .map(association => ({
      url: association.imageurl
    }));

    if(normalizedObject.associateImagesURLS.length === 0) {
      delete normalizedObject.associateImagesURLS;
    }

  };

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

  normalizedObject.tourEscortsImagesURLS = tourEscorts.filter(tour => tour.imageUrl !== undefined && tour.imageUrl !== '')
  .map(tour => ({
    url: tour.imageUrl
  }));

  if(normalizedObject.tourEscortsImagesURLS.length === 0) {
    delete normalizedObject.tourEscortsImagesURLS;
  }

  return normalizedObject;

}



export { DMCNormalizer }

