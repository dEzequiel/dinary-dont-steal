export function getUrlProtocol(url) {
    const parsedUrl = new URL(url)
    return parsedUrl.protocol
}