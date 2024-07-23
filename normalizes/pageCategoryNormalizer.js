import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl } from "../constants.js";

function PageCategoryNormalizer() {}

PageCategoryNormalizer.prototype = Object.create(Normalizer.prototype);
PageCategoryNormalizer.prototype.normalize = function (image, imageFacebook) {
    const normalizedObject = {};

    if (image) {
        normalizedObject.image = {
            url: defaultImagesUrl.includes(image.url) ? '' : image.url
        };
    }

    if (imageFacebook) {
        normalizedObject.imageFacebook = {
            url: defaultImagesUrl.includes(imageFacebook.url) ? '' : imageFacebook.url
        };
    }
    
    return normalizedObject;
}

export { PageCategoryNormalizer }