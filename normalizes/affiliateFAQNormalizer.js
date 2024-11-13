import { Normalizer } from "./base/base_normalizer.js";

function AffiliateFAQNormalizer() {}

AffiliateFAQNormalizer.prototype = Object.create(Normalizer.prototype);
AffiliateFAQNormalizer.prototype.normalize = function(id, title, slug, images) {
  const normalizedOptions = {
    id: String(id),
    title,
    slug,
  };  

  if(images) {
    normalizedOptions.images = images.map(image => ({ url: image.url }))
    if(normalizedOptions.images.length === 0) delete normalizedOptions.images;
  }

  return normalizedOptions;

};

export { AffiliateFAQNormalizer }