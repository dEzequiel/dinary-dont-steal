import { Normalizer } from "./base/base_normalizer.js";
import { determineImageUrl } from "../utils/helper.js";

function ProviderNormalizer() {}

ProviderNormalizer.prototype = Object.create(Normalizer.prototype);
ProviderNormalizer.prototype.normalize = function (name, slug, images) {
    const normalizedObject = {
        name,
        slug,
    };

    if(images) {
        normalizedObject.images = {
            logo: determineImageUrl(images.logo?.url),
            photo: determineImageUrl(images.photo?.url)
        }

        if(normalizedObject.images.logo == '') delete normalizedObject.images.logo;
        if(normalizedObject.images.photo == '') delete normalizedObject.images.photo
        if(Object.keys(normalizedObject.images).length === 0) delete normalizedObject.images;
    }

    return normalizedObject;
}

export { ProviderNormalizer }