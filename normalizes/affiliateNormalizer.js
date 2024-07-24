import { Normalizer } from "./base/base_normalizer.js";
import { determineImageUrl } from "../utils/helper.js";

function AffiliateNormalizer() {}

AffiliateNormalizer.prototype = Object.create(Normalizer.prototype);
AffiliateNormalizer.prototype.normalize = function(id, userId, name, images) {
  const normalizedObject = {
    id: String(id),
    userId: String(userId),
    name,
  };

  if(images) {
    normalizedObject.images = {
      logo: determineImageUrl(images.logo?.url),
      photo: determineImageUrl(images.photo?.url)
    }

    if(normalizedObject.images.logo == '') delete normalizedObject.images.logo;
    if(normalizedObject.images.photo == '') delete normalizedObject.images.photo
    if(Object.keys(normalizedObject.images).length === 0) delete normalizedObject.images;
  }
  
  return normalizedObject;
};

export { AffiliateNormalizer }