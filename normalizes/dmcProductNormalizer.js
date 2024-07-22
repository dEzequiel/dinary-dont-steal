import { Normalizer } from "./base/base_normalizer.js";
import { commonCharsOnImages } from "../constants.js";


function DMCProductNormalizer() {}

DMCProductNormalizer.prototype = Object.create(Normalizer.prototype);
DMCProductNormalizer.prototype.normalize = function(dmcId, name, image, dmcName) {
  return {
    dmcId: String(dmcId),
    name: name.replace(commonCharsOnImages, "_"),
    image: {
      ...image
    },
    dmcName: dmcName.replace(commonCharsOnImages, "_")
  };
};

export { DMCProductNormalizer }