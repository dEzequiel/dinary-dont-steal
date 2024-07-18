import { Normalizer } from "./base/base_normalizer.js";

function DMCFAQNormalizer() {}

DMCFAQNormalizer.prototype = Object.create(Normalizer.prototype);
DMCFAQNormalizer.prototype.normalize = function(dmcId, slug, images = [{}]) {
  return {
    dmcId: String(dmcId),
    slug,
    images: images.map(img => ({ url: img.url }))
  };
}
export { DMCFAQNormalizer }