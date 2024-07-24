import { Normalizer } from "./base/base_normalizer.js";
import { determineImageUrl } from "../utils/helper.js";

function DestinationCountryZoneNormalizer() {}

DestinationCountryZoneNormalizer.prototype = Object.create(Normalizer.prototype);
DestinationCountryZoneNormalizer.prototype.normalize = function (name, title, image, iconImage) {
    const normalizedObject = {
        name,
        title,
    } 

    if(image) {
        normalizedObject.image = {
            url: determineImageUrl(image.url)
        }

        if(normalizedObject.image.url === '') delete normalizedObject.image;
    }

    if(iconImage) {
        normalizedObject.iconImage = {
            url: determineImageUrl(image.url)
        }

        if(normalizedObject.iconImage.url === '') delete normalizedObject.iconImage;
    }


    return normalizedObject;
}

export {
    DestinationCountryZoneNormalizer
}