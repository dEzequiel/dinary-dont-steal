import { Normalizer } from "./base/base_normalizer.js";

function BudgetProductNormalizer() {}

BudgetProductNormalizer.prototype = Object.create(Normalizer.prototype);
BudgetProductNormalizer.prototype.normalize = function(name, slug, productImage = {}, itineraryImages) {
  return {
    name,
    slug,
    productImage: { url: productImage.url },
    itinerary: itineraryImages.map(img => ({ url: img.image.url }))
  };
};

export { BudgetProductNormalizer }