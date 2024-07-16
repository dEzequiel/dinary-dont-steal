import { Normalizer } from "./base/base_normalizer.js";

function DMCNormalizer() {}
DMCNormalizer.prototype = Object.create(Normalizer.prototype);
DMCNormalizer.prototype.normalize = function(dmcId, name, images = {}) {
  return {
    dmcId: String(dmcId),
    name,
    images: {
      splash: images.splash?.url,
      logo: images.logo?.url,
      photo: images.photo?.url
    }
  };
};

export { DMCNormalizer }