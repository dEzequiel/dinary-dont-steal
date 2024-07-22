import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl } from "../../constants.js";

function ProviderNormalizer() {}

ProviderNormalizer.prototype = Object.create(Normalizer.prototype);
ProviderNormalizer.prototype.normalize = function (name, slug, images) {
    const normalizedObject = {
        name,
        slug,
        images: {
            logo:  defaultImagesUrl.includes(images.logo?.url) ? '' : images.logo?.url,
            photo: defaultImagesUrl.includes(images.photo?.url) ? '' : images.photo?.url,
          }
    };

    if(normalizedObject.images.logo == '') delete normalizedObject.images.logo;
    if(normalizedObject.images.photo == '') delete normalizedObject.images.photo

    return normalizedObject;
}

export { ProviderNormalizer }