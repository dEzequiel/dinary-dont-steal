import { Normalizer } from "./base/base_normalizer.js";

function DMCProductNormalizer() {}

DMCProductNormalizer.prototype = Object.create(Normalizer.prototype);
DMCProductNormalizer.prototype.normalize = function(dmcId, name, image = {}) {
  return {
    dmcId: String(dmcId),
    name,
    image: {
      ...image
    }
  };
};

export { DMCProductNormalizer }