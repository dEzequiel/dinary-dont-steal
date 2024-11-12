import { Normalizer } from "./base/base_normalizer.js";

function BudgetProductNormalizer() {}

BudgetProductNormalizer.prototype = Object.create(Normalizer.prototype);
BudgetProductNormalizer.prototype.normalize = function(name, slug, productImage, itineraryImages) {
  const normalizedObject =- {
    name,
    slug,
  };

  if(productImage) {
    normalizedObject.productImage = { url: img.image.url }
    if(normalizedObject.productImage.url == '') delete normalizedObject.productImage.url
  }

  if(itineraryImages) {
    normalizedObject.itinerary = itineraryImages.map(img => ({ url: img.image.url }))
    if(normalizedObject.itinerary.length === 0) delete normalizedObject.itinerary;
  }

  return normalizedObject;
  
};

export { BudgetProductNormalizer }

