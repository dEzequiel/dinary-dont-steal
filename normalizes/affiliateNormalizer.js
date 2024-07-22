import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl } from "../../constants.js";

function AffiliateNormalizer() {}

AffiliateNormalizer.prototype = Object.create(Normalizer.prototype);
AffiliateNormalizer.prototype.normalize = function(id, userId, name, images = {}) {
  return {
    id: String(id),
    userId: String(userId),
    name,
    images: {
      logo:  defaultImagesUrl.includes(images.logo?.url) ? '' : images.logo?.url,
      photo: defaultImagesUrl.includes(images.photo?.url) ? '' : images.photo?.url,
    }
  };
};

export { AffiliateNormalizer }