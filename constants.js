const uri = 'mongodb://127.0.0.1'
const defaultImagesUrl = [
    'http://res.cloudinary.com/open-market-travel/image/upload/v1412587999/avatar.jpg',
    'http://res.cloudinary.com/open-market-travel/image/upload/v1426853495/assets/avatar.jpg',
    'http://res.cloudinary.com/open-market-travel/image/upload/v1426854292/assets/omtempty.png',
    'https://res.cloudinary.com/open-market-travel/image/upload/v1426854292/assets/omtempty.png',
    'https://graph.facebook.com/100007543428129/picture?type=large',
]

const commonCharsOnImages = /[\/\\|*]/g;

export {
    uri,
    defaultImagesUrl,
    commonCharsOnImages
}