async function findAllTravelerImages(collection='travelers', skip=0, limit=0, projection={
    '_id': 1,
    'slug': 1,
    'firstname': 1,
    'lastname': 1,
    'images': 1
}) {
    console.log('Queries >> traveler >> findAllTravelerImages >> Start')
    const query = {
        $or: [
            { 'images': { $exists: true, $ne: null, $ne: '' } },
            { 'images.logo.url': { $exists: true, $ne: null, $ne: '' } },
            { 'images.photo.url': { $exists: true, $ne: null, $ne: '' } }
        ]
    };
    
    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> traveler >> findAllTravelerImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllTravelerImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllTravelerImages
}