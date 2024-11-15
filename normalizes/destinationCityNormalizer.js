import { Normalizer } from "./base/base_normalizer.js";

function DestinationCityNormalizer() {}

DestinationCityNormalizer.prototype = Object.create(Normalizer.prototype);
DestinationCityNormalizer.prototype.normalize = function (id, slug, mainImage, imageFacebook) {
  const normalizedObject = {
    id: String(id),
    slug: slug
  };

  if(mainImage && mainImage.url) {
    normalizedObject.mainImage = {
      url: mainImage.url
    }
  }

    if(imageFacebook && imageFacebook.url) {
        normalizedObject.imageFacebook = {
          url: imageFacebook.url
        }
    }


  return normalizedObject;
};

export { DestinationCityNormalizer };