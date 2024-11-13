import { Normalizer } from "./base/base_normalizer.js";

function DMCFAQNormalizer() {}

DMCFAQNormalizer.prototype = Object.create(Normalizer.prototype);
DMCFAQNormalizer.prototype.normalize = function(dmcId, slug, images, imageFacebook) {

  const normalizedObject = {
    id: String(dmcId),
    name: slug,
  };

  if(images) {
    normalizedObject.images = images.map(img => ({ url: img.url }))
    if(normalizedObject.images.length === 0) delete normalizedObject.images;
  }

  if(imageFacebook) {
    normalizedObject.imageFacebook = imageFacebook.url
    if(normalizedObject.imageFacebook == '') delete normalizedObject.imageFacebook
  }

  return normalizedObject
}

export { DMCFAQNormalizer }