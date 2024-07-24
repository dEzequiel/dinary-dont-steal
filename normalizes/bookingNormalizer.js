import { Normalizer } from "./base/base_normalizer.js";

function BookingNormalizer() {}

BookingNormalizer.prototype = Object.create(Normalizer.prototype);
BookingNormalizer.prototype.normalize = function(idBooking, voucher, voucherflights, passport, visaletter, invoicesaerial, invoicesagency, invoicesprovider, invoicestravelersense) {
    const normalizedObject = {
        idBooking: idBooking
    }

    if(voucher) {
        normalizedObject.voucher = { url: voucher.url }
        if(normalizedObject.voucher.url == '') delete normalizedObject.voucher
    }

    if(voucherflights) {
        normalizedObject.voucherflights = { url: voucherflights.url }
        if(normalizedObject.voucherflights.url == '') delete normalizedObject.voucherflights
    }

    if(passport) {
        normalizedObject.passport = { url: passport.url }
        if(normalizedObject.passport.url === '') delete normalizedObject.passport;
    }

    if(visaletter) {
        normalizedObject.visaletter = { url: visaletter.url }
        if(normalizedObject.visaletter.url === '') delete normalizedObject.visaletter;
    }

    if(invoicesaerial && invoicesaerial.length > 0) {
        normalizedObject.invoicesaerial = invoicesaerial
            .filter(img => img.file !== undefined)
            .map(img => ({ url: img.file.url }));
        if(normalizedObject.invoicesaerial.length === 0) delete normalizedObject.invoicesaerial;
    }
    
    if(invoicesagency && invoicesagency.length > 0) {
        normalizedObject.invoicesagency = invoicesagency
            .filter(img => img.file !== undefined)
            .map(img => ({ url: img.file.url }));
        if(normalizedObject.invoicesagency.length === 0) delete normalizedObject.invoicesagency;
    }

    if(invoicesprovider && invoicesprovider.length > 0) {
        normalizedObject.invoicesprovider = invoicesprovider
            .filter(img => img.file !== undefined)
            .map(img => ({ url: img.file.url }));
        if(normalizedObject.invoicesprovider.length === 0) delete normalizedObject.invoicesprovider;
    }

    if(invoicestravelersense && invoicestravelersense.length > 0) {
        normalizedObject.invoicestravelersense = invoicestravelersense
            .filter(img => img.file !== undefined)
            .map(img => ({ url: img.file.url }));
        if(normalizedObject.invoicestravelersense.length === 0) delete normalizedObject.invoicestravelersense;
    }

    return normalizedObject;
}

export { BookingNormalizer }