async function findAllDMCProductsCloudinaryImagesURL(collection='dmcproducts', limit=5) {
    console.log('Querying...')
    const query = {
        ['productimage.url']: { $ne: null, $ne: "" },
        ['productimage.url']: { $exists: true }
    }
    try {
        const documents = await collection.find(query).limit(limit).toArray()
        return documents
    } catch (error) {
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllDMCProductsCloudinaryImagesURL
}