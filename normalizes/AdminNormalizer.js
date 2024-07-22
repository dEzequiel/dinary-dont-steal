import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl } from "../constants.js";

function AdminNormalizer() {}

AdminNormalizer.prototype = Object.create(Normalizer.prototype);
AdminNormalizer.prototype.normalize = function(id, name, images = {}) {
  return {
    id: String(id),
    name,
    images: {
      logo:  defaultImagesUrl.includes(images.logo?.url) ? '' : images.logo?.url,
      photo: defaultImagesUrl.includes(images.photo?.url) ? '' : images.photo?.url,
    }
  };
};

export { AdminNormalizer }