import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl } from "../constants.js";

function TripTagNormalizer() {}

TripTagNormalizer.prototype = Object.create(Normalizer.prototype);
TripTagNormalizer.prototype.normalize = function (slug, title, mainImage) {
    const normalizedObject = {
        slug,
        title,
        image: {
            url: defaultImagesUrl.includes(mainImage.url) ? '' : mainImage.url
        }
    };

    return normalizedObject;
}
export { TripTagNormalizer }