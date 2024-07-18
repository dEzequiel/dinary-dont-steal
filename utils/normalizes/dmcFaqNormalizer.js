import { Normalizer } from "./base/base_normalizer.js";

function DMCFAQNormalizer() {}

DMCFAQNormalizer.prototype = Object.create(Normalizer.prototype);
DMCFAQNormalizer.prototype.normalize = function(dmcId, slug, images = [{}], imageFacebook = {}) {
  return {
    dmcId: String(dmcId),
    name: slug,
    images: images.map(img => ({ url: img.url })),
    imageFacebook: imageFacebook.url
  };
}
export { DMCFAQNormalizer }