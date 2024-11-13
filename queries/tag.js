async function findAllTripTagImages(collection='triptags', skip=0, limit=0, projection={
    '_id': 1,
    'slug': 1,
    'title': 1,
    'mainImage': 1,
    'imageFacebook': 1
}) {
    console.log('Queries >> tag >> findAllTagImages >> Start')
    const query = {
        $or: [
            { 'mainImage': { $exists: true, $ne: null, $ne: '' } },
            { 'mainImage.url': { $exists: true, $ne: null, $ne: '' } },
            { 'imageFacebook': { $exists: true, $ne: null, $ne: '' } },
            { 'imageFacebook.url': { $exists: true, $ne: null, $ne: '' } }

        ]
    };

    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> tag >> findAllTagImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllTagImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

async function findAllTagImages(collection='tags', skip=0, limit=0, projection={
    '_id': 1,
    'mainImage': 1,
}) {
    console.log('Queries >> tag >> findAllTagImages >> Start')
    const query = {
        $or: [
            { 'mainImage': { $exists: true, $ne: null, $ne: '' } },
            { 'mainImage.url': { $exists: true, $ne: null, $ne: '' } }
        ]
    };

    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> tag >> findAllTagImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllTagImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllTripTagImages,
    findAllTagImages
}