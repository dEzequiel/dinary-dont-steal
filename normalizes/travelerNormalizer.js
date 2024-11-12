import { Normalizer } from "./base/base_normalizer.js";
import { determineImageUrl } from "../utils/helper.js";

function TravelerNormalizer() {}

TravelerNormalizer.prototype = Object.create(Normalizer.prototype);
TravelerNormalizer.prototype.normalize = function (slug, firstname, lastname, images) {
    const normalizedObject = {
        slug,
        name: lastname ? `${firstname}_${lastname}` : `${firstname}`,

    };
    
    if(images) {
        normalizedObject.images = {
            logo: images.logo?.url ? determineImageUrl(images.logo?.url) : '',
            photo: images.photo?.url ? determineImageUrl(images.photo?.url) : ''
        }
    
        if(normalizedObject.images.logo == '') delete normalizedObject.images.logo;
        if(normalizedObject.images.photo == '') delete normalizedObject.images.photo
        if(Object.keys(normalizedObject.images).length === 0) delete normalizedObject.images;
    }

    

    return normalizedObject;
}

export { TravelerNormalizer }