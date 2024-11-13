import { Normalizer } from "./base/base_normalizer.js";

function BudgetProductNormalizer() {}

BudgetProductNormalizer.prototype = Object.create(Normalizer.prototype);
BudgetProductNormalizer.prototype.normalize = function(id, name, slug, productImage, itineraryImages) {
  const normalizedObject =- {
    id: String(id),
    name,
    slug,
  };

  if(productImage && productImage.url) {
    normalizedObject.productImage = { url: img.image.url }
  }

  if(normalizedObject.productImage.url == '') delete normalizedObject.productImage.url


  if(itineraryImages) {
    normalizedObject.itinerary = itineraryImages
    .filter(img => img.image?.url) // Filtrar los elementos que tienen la propiedad 'url' definida
    .map(img => ({ url: img.image.url }));   
  }

  if(normalizedObject.itinerary.length === 0) delete normalizedObject.itinerary;


  return normalizedObject;
  
};

export { BudgetProductNormalizer }

