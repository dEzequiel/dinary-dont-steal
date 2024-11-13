async function findAllUserImages(collection='users', skip=0, limit=0, projection={
    '_id': 1,
    'username': 1,
    'photo': 1
}) {
    console.log('Queries >> user >> findAllUserImages >> Start')
    const query = {
        $or: [
            { 'photo': { $exists: true, $ne: null, $ne: '' } },
            { 'photo.url': { $exists: true, $ne: null, $ne: '' } }
        ]
    };

    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> user >> findAllUserImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllUserImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllUserImages
}