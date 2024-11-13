async function findAllProviderImages(collection='providers', skip=0, limit=0, projection={
    '_id': 1,
    'name': 1,
    'slug': 1,
    'images': 1
}) {
    console.log('Queries >> provider >> findAllProviderImages >> Start')
    const query = {
        $or: [
            { 'images': { $exists: true, $ne: null, $ne: '' } },
            { 'images.logo.url': { $exists: true, $ne: null, $ne: '' } },
            { 'images.photo.url': { $exists: true, $ne: null, $ne: '' } }
        ]
    };

    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> provider >> findAllProviderImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllProviderImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllProviderImages
}