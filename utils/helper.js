export const getImageNameFromURL = (url) => {
    return url.split('/').pop().split('.')[0];
}

export const getUrlProtocol = (url) => {
    if(!url) return;
    
    const parsedUrl = new URL(url)
    return parsedUrl.protocol
}
