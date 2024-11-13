import { Normalizer } from "./base/base_normalizer.js";

function BookedProductNormalizer() {}

BookedProductNormalizer.prototype = Object.create(Normalizer.prototype);
BookedProductNormalizer.prototype.normalize = function(_id, slug, productImage, itineraryImages) {
  const normalizedObject = {
    id: String(_id),
    slug: slug,
  };

  if(productImage && productImage.url) {
    normalizedObject.productImage = { url: productImage.url }
    if(normalizedObject.productImage.url == '') delete normalizedObject.productImage;
  }

  if(itineraryImages) {
    normalizedObject.itinerary = itineraryImages
    .filter(img => img.image?.url) // Filtrar los elementos que tienen la propiedad 'url' definida
    .map(img => ({ url: img.image.url }));   
    if(normalizedObject.itinerary.length === 0) delete normalizedObject.itinerary;

  }
  
  return normalizedObject;
};

export { BookedProductNormalizer }