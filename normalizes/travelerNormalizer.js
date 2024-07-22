import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl } from "../constants.js";

function TravelerNormalizer() {}

TravelerNormalizer.prototype = Object.create(Normalizer.prototype);
TravelerNormalizer.prototype.normalize = function (slug, firstname, lastname, images) {
    const normalizedObject = {
        slug,
        name: lastname ? `${firstname}_${lastname}` : `${firstname}`,
        images: {
            logo:  defaultImagesUrl.includes(images.logo?.url) ? '' : images.logo?.url,
            photo: defaultImagesUrl.includes(images.photo?.url) ? '' : images.photo?.url,
          }
    };

    if(normalizedObject.images.logo == '') delete normalizedObject.images.logo;
    if(normalizedObject.images.photo == '') delete normalizedObject.images.photo

    return normalizedObject;
}

export { TravelerNormalizer }