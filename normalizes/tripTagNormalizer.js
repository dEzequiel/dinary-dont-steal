import { Normalizer } from "./base/base_normalizer.js";
import { determineImageUrl } from "../utils/helper.js";

function TripTagNormalizer() {}

TripTagNormalizer.prototype = Object.create(Normalizer.prototype);
TripTagNormalizer.prototype.normalize = function (id, slug, title, mainImage, imageFacebook) {
    const normalizedObject = {
        id: String(id),
        slug,
        title
    };

    if(mainImage) {
        normalizedObject.image = {
            url: determineImageUrl(mainImage.url)
        }
        if(normalizedObject.image.url == '') delete normalizedObject.image;    
    }

    if (imageFacebook) {
        normalizedObject.imageFacebook = {
            url: determineImageUrl(imageFacebook.url)
        };
        if(normalizedObject.imageFacebook.url == '') delete normalizedObject.imageFacebook

    }

    return normalizedObject;
}
export { TripTagNormalizer }