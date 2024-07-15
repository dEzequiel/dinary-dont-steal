async function findAllAffiliatesImages(collection='affiliates', limit=10, projection={
    'user': 1,
    'name': 1,
    'images': 1
}) {
    console.log('Queries >> affiliates >> findAllAffiliatesImages >> Start')
    const query = {
        'images.logo.url': { $exists: true, $ne: null, $ne: '' },
        'images.photo.url': { $exists: true, $ne: null, $ne: '' }
    }

    try {
        const documents = await collection.find(query).project(projection).limit(limit).toArray()
        console.log('Queries >> affiliates >> findAllAffiliatesImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllDMCImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllAffiliatesImages
}