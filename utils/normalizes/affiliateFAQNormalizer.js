import { Normalizer } from "./base/base_normalizer.js";

function AffiliateFAQNormalizer() {}

AffiliateFAQNormalizer.prototype = Object.create(Normalizer.prototype);
AffiliateFAQNormalizer.prototype.normalize = function(id, title, slug, images) {
  return {
    id: String(id),
    title,
    slug,
    images: images.map(image => ({ url: image.url }))
  };
};

export { AffiliateFAQNormalizer }