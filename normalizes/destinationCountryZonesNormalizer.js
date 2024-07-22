import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl } from "../constants.js";

function DestinationCountryZoneNormalizer() {}

DestinationCountryZoneNormalizer.prototype = Object.create(Normalizer.prototype);
DestinationCountryZoneNormalizer.prototype.normalize = function (name, title, image, iconImage) {
    const normalizedObject = {
        name,
        title,
        image: {
            url: (image === null || image === undefined)
            ? (defaultImagesUrl.includes(image?.url) ? '' : image?.url)
            : image.url
        },

        iconImage: {
            url: (iconImage === null || iconImage === undefined)
            ? (defaultImagesUrl.includes(iconImage?.url) ? '' : iconImage?.url)
            : iconImage.url,
        }
    } 

    if(normalizedObject.image.url === undefined) delete normalizedObject.image;
    if(normalizedObject.iconImage.url === undefined) delete normalizedObject.iconImage;

    return normalizedObject;
}

export {
    DestinationCountryZoneNormalizer
}