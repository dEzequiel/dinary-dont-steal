import { Normalizer } from "./base/base_normalizer.js";
import { determineImageUrl } from "../utils/helper.js";

function TagNormalizer() {}

TagNormalizer.prototype = Object.create(Normalizer.prototype);
TagNormalizer.prototype.normalize = function (image) {
    const normalizedObject = {};

    if(image) {
        normalizedObject.image = {
            url: determineImageUrl(image.url)
        }
        if(normalizedObject.image.url == '') delete normalizedObject.image;    
    }

    return normalizedObject;
}

export { TagNormalizer }