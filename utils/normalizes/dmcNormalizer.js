import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl } from "../../constants.js";

function DMCNormalizer() {}
DMCNormalizer.prototype = Object.create(Normalizer.prototype);
DMCNormalizer.prototype.normalize = function(dmcId, name, images = {}) {
  return {
    dmcId: String(dmcId),
    name,
    images: {
      logo: {
          url: defaultImagesUrl.includes(images.logo.url) ? '' : images.logo.url
      },
      photo: {
          url: defaultImagesUrl.includes(images.photo.url) ? '' : images.photo.url
      }
  }
  };
};

export { DMCNormalizer }