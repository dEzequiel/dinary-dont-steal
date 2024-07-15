const createNormalizedDMCProduct = (dmcId, name, image = {}) => ({
    dmcId: String(dmcId),
    name,
    image: {
        ...image
    }
})

const createNormalizedDMC = (dmcId, name, images = {}) => ({
    dmcId: String(dmcId),
    name,
    images: {
        splash: images.splash.url,
        logo: images.logo.url,
        photo: images.photo.url
    }
});

const createNormalizedAffiliate = (id, userId, name, images = {}) => ({
    id: String(id),
    userId: String(userId),
    name,
    images: {
        logo: images.logo.url == 'http://res.cloudinary.com/open-market-travel/image/upload/v1426853495/assets/avatar.jpg' ? '' : images.logo.url,
        photo: images.photo.url == 'http://res.cloudinary.com/open-market-travel/image/upload/v1426853495/assets/avatar.jpg' ? '' : images.photo.url,
    }
})

const createNormalizedBookedProduct = (slug, productImage = {}, image = {}) => ({
    slug: slug,
    productImage: { url: productImage.url },
    image: { url: image.url }
})

export { createNormalizedDMCProduct, createNormalizedDMC, createNormalizedAffiliate, createNormalizedBookedProduct }