import { Normalizer } from "./base/base_normalizer.js";

function DestinationCityNormalizer() {}

DestinationCityNormalizer.prototype = Object.create(Normalizer.prototype);
DestinationCityNormalizer.prototype.normalize = function (slug, mainImage, imageFacebook) {
  const normalizedObject = {
    slug: slug
  };

  if(mainImage && mainImage.url) {
    normalizedObject.mainImage = mainImage.url;
  }

    if(imageFacebook && imageFacebook.url) {
        normalizedObject.imageFacebook = imageFacebook.url;
    }


  return normalizedObject;
};

export { DestinationCityNormalizer };