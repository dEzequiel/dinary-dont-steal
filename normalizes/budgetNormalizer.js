import { Normalizer } from "./base/base_normalizer.js";

function BudgetNormalizer() {}

BudgetNormalizer.prototype = Object.create(Normalizer.prototype);
BudgetNormalizer.prototype.normalize = function(code, voucher, passportfile, visaletterfile, invoicesaerial, invoicesagency, invoicesprovider, invoicestravelersense) {
    const normalizedObject = {
        code: code
    }

    if (voucher && (voucher.url || voucher.secure_url)) {
        normalizedObject.voucher = {
            url: voucher.url,
            secure_url: voucher.secure_url
        }
    }

    if (passportfile && (passportfile.url || passportfile.secure_url)) {
        normalizedObject.passportfile = {
            url: passportfile.url,
            secure_url: passportfile.secure_url
        }
    }

    if (visaletterfile && (visaletterfile.url || visaletterfile.secure_url)) {
        normalizedObject.visaletterfile = {
            url: visaletterfile.url,
            secure_url: visaletterfile.secure_url
        }
    }

    if (invoicesaerial && (invoicesaerial.file.url || invoicesaerial.file.secure_url)) {
        normalizedObject.invoicesaerial = {
            file: {
                url: invoicesaerial.file.url,
                secure_url: invoicesaerial.file.secure_url
            }
        }
    }

    if (invoicesagency && (invoicesagency.file.url || invoicesagency.file.secure_url)) {
        normalizedObject.invoicesagency = {
            file: {
                url: invoicesagency.file.url,
                secure_url: invoicesagency.file.secure_url
            }
        }
    }

    if (invoicesprovider && (invoicesprovider.file.url || invoicesprovider.file.secure_url)) {
        normalizedObject.invoicesprovider = {
            file: {
                url: invoicesprovider.file.url,
                secure_url: invoicesprovider.file.secure_url
            }
        }
    }

    if (invoicestravelersense && (invoicestravelersense.file.url || invoicestravelersense.file.secure_url)) {
        normalizedObject.invoicestravelersense = {
            file: {
                url: invoicestravelersense.file.url,
                secure_url: invoicestravelersense.file.secure_url
            }
        }
    }

    return normalizedObject;
}


export { BudgetNormalizer } 