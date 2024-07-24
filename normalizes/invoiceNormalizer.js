import { Normalizer } from "./base/base_normalizer.js";

function InvoiceNormalizer() {}

InvoiceNormalizer.prototype = Object.create(Normalizer.prototype);
InvoiceNormalizer.prototype.normalize = function(name, file) {
    const normalizedObject = {
        name: name,
        file: { url: file.url }
    }

    if(normalizedObject.file.url === '') delete normalizedObject.file;

    return normalizedObject;
}

export { InvoiceNormalizer }