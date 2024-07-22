import { Normalizer } from "./base/base_normalizer.js";
import { defaultImagesUrl } from "../constants.js";

function PageNormalizer() {}

PageNormalizer.prototype = Object.create(Normalizer.prototype);
PageNormalizer.prototype.normalize = function (id, slug, title, image, imageFacebook, imageGalery) {
    const normalizedObject = {
        id: String(id),
        name: slug,
        title,
        image: {
            url: defaultImagesUrl.includes(image.url) ? '' : image.url
        }
    };

    // Añadir imageGalery solo si existe y no es una lista vacía
    if (imageGalery && imageGalery.length > 0) {
        normalizedObject.imageGalery = imageGalery.map(image => ({
            url: defaultImagesUrl.includes(image.url) ? '' : image.url
        }));
    }

    if (imageFacebook) {
        normalizedObject.imageFacebook = {
            url: defaultImagesUrl.includes(imageFacebook.url) ? '' : imageFacebook.url
        };
    }
    
    return normalizedObject;
}

export { PageNormalizer }
