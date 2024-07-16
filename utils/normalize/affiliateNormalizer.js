import { Normalizer } from "./base/base_normalizer.js";

function AffiliateNormalizer() {}

AffiliateNormalizer.prototype = Object.create(Normalizer.prototype);
AffiliateNormalizer.prototype.normalize = function(id, userId, name, images = {}) {
  const defaultImageUrl = 'http://res.cloudinary.com/open-market-travel/image/upload/v1426853495/assets/avatar.jpg';
  return {
    id: String(id),
    userId: String(userId),
    name,
    images: {
      logo: images.logo?.url === defaultImageUrl ? '' : images.logo?.url,
      photo: images.photo?.url === defaultImageUrl ? '' : images.photo?.url,
    }
  };
};

export { AffiliateNormalizer }