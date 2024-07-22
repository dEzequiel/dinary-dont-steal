import { Normalizer } from "./base/base_normalizer.js";

function BookedProductNormalizer() {}

BookedProductNormalizer.prototype = Object.create(Normalizer.prototype);
BookedProductNormalizer.prototype.normalize = function(slug, productImage, itineraryImages) {
  return {
    slug,
    productImage: { url: productImage.url },
    itinerary: itineraryImages.map(img => ({ url: img.image.url }))
  };
};

export { BookedProductNormalizer }