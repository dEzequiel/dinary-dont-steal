import { defaultImagesUrl } from "../constants.js";


export const getImageNameFromURL = (url) => {
    return url.split('/').pop().split('.')[0];
}

export const getUrlProtocol = (url) => {
    if(!url) return;
    
    const parsedUrl = new URL(url)
    return parsedUrl.protocol
}

export const isFacebookGraphUrl = (url) => {
    return url.includes('graph.facebook.com');
};

export const determineImageUrl = (url) => {
    if (isFacebookGraphUrl(url)) {
        return ''; 
    } else if (defaultImagesUrl.includes(url)) {
        return ''; 
    }
    return url; // Retorna la URL original en cualquier otro caso
}