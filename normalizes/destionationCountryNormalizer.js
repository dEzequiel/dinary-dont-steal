import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl } from "../constants.js";

function DestinationCountryNormalizer() {}

DestinationCountryNormalizer.prototype = Object.create(Normalizer.prototype);
DestinationCountryNormalizer.prototype.normalize = function (name, title, image, imageFacebook) {
    const normalizedObject = {
        name,
        title,
        image: {
            url: (image === null || image === undefined)
            ? (defaultImagesUrl.includes(image?.url) ? '' : image?.url)
            : image.url
        },

        imageFacebook: {
            url: (imageFacebook === null || imageFacebook === undefined)
            ? (defaultImagesUrl.includes(imageFacebook?.url) ? '' : imageFacebook?.url)
            : imageFacebook.url,
        }
    } 

    if(normalizedObject.image.url === undefined) delete normalizedObject.image;
    if(normalizedObject.imageFacebook.url === undefined) delete normalizedObject.imageFacebook;

    return normalizedObject;
};

export { DestinationCountryNormalizer }