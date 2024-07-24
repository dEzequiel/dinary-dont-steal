import { Normalizer } from "./base/base_normalizer.js";

function BookedProductNormalizer() {}

BookedProductNormalizer.prototype = Object.create(Normalizer.prototype);
BookedProductNormalizer.prototype.normalize = function(slug, productImage, itineraryImages) {
  const normalizedObject = {
    slug,
  };

  if(productImage) {
    normalizedObject.productImage = { url: productImage.url }
    if(normalizedObject.productImage.url == '') delete normalizedObject.productImage;
  }

  if(itineraryImages) {
    normalizedObject.itinerary = itineraryImages.map(img => ({ url: img.image.url }))
    if(normalizedObject.itinerary.length === 0) delete normalizedObject.itinerary;
  }
  
  return normalizedObject;
};

export { BookedProductNormalizer }