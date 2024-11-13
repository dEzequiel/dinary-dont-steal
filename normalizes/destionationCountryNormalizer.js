import { Normalizer } from "./base/base_normalizer.js";
import { determineImageUrl } from "../utils/helper.js";

function DestinationCountryNormalizer() {}

DestinationCountryNormalizer.prototype = Object.create(Normalizer.prototype);
DestinationCountryNormalizer.prototype.normalize = function (id, name, title, image, imageFacebook) {
    const normalizedObject = {
        id: String(id),
        name,
        title
    } 

    if(image) {
        normalizedObject.image = {
            url: determineImageUrl(image.url)
        }

        if(normalizedObject.image.url === '') delete normalizedObject.image;
    }

    if(imageFacebook) {
        normalizedObject.imageFacebook = {
            url: determineImageUrl(image.url)
        }

        if(normalizedObject.imageFacebook.url === '') delete normalizedObject.imageFacebook;
    }


    return normalizedObject;
};

export { DestinationCountryNormalizer }