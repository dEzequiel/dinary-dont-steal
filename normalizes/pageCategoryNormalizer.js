import { Normalizer } from "./base/base_normalizer.js";
import { determineImageUrl } from "../utils/helper.js";

function PageCategoryNormalizer() {}

PageCategoryNormalizer.prototype = Object.create(Normalizer.prototype);
PageCategoryNormalizer.prototype.normalize = function (name, image, imageFacebook) {
    const normalizedObject = {
        name
    };

    if (image) {
        normalizedObject.image = {
            url: determineImageUrl(image.url)
        };

        if(normalizedObject.image.url === '') delete normalizedObject.image;
    }

    if (imageFacebook) {
        normalizedObject.imageFacebook = {
            url: determineImageUrl(imageFacebook.url)
        };

        if(normalizedObject.imageFacebook.url === '') delete normalizedObject.imageFacebook;

    }
    
    return normalizedObject;
}

export { PageCategoryNormalizer }