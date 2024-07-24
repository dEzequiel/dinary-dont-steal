import { Normalizer } from "./base/base_normalizer.js";
import { determineImageUrl } from "../utils/helper.js";

function PageNormalizer() {}

PageNormalizer.prototype = Object.create(Normalizer.prototype);
PageNormalizer.prototype.normalize = function (id, slug, title, image, imageFacebook, imageGalery) {
    const normalizedObject = {
        id: String(id),
        name: slug,
        title
    };

    if(image) {
        normalizedObject.image = {
            url: determineImageUrl(image.url)
        }

        if(normalizedObject.image.url === '') delete normalizedObject.image;
    }   

    // Añadir imageGalery solo si existe y no es una lista vacía
    if (imageGalery && imageGalery.length > 0) {
        normalizedObject.imageGalery = imageGalery.map(image => ({
            url: determineImageUrl(image.url)
        }));

        if(normalizedObject.imageGalery.length === 0) delete normalizedObject.imageGalery;
    }

    if (imageFacebook) {
        normalizedObject.imageFacebook = {
            url: determineImageUrl(imageFacebook.url)
        };

        if (normalizedObject.imageFacebook.url === '') delete normalizedObject.imageFacebook;
    }
    
    return normalizedObject;

}


export { PageNormalizer }
