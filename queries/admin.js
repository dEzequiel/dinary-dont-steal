async function findAllAdminImages(collection='omtadmins', limit=10, projection={
    '_id': 1,
    'name': 1,
    'images': 1
}) {
    console.log('Queries >> admin >> findAllAdminImages >> Start')
    const query = {
        $or: [
            { 'images': { $exists: true, $ne: null, $ne: '' } },
            { 'images.logo.url': { $exists: true, $ne: null, $ne: '' } },
            { 'images.photo.url': { $exists: true, $ne: null, $ne: '' } }
        ]
    };

    try {
        const documents = await collection.find(query).project(projection).limit(limit).toArray()
        console.log('Queries >> admin >> findAllAdminImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllAdminImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllAdminImages
}