async function findAllDestinationCityImages(collection='destinationcities', skip=0, limit=0, projection={
    '_id': 1,
    'slug': 1,
    'title_es': 1,
    'mainImage': 1,
    'imageFacebook':1
}) {
    console.log('Queries >> destinationCities >> findAllDestinationCitiesImages >> Start')
    const query = {
        $or: [
            { 
                'mainImage.url': { $exists: true, $ne: null, $ne: '' } 
            },            
            { 
                'imageFacebook': { $exists: true, $ne: null, $ne: '' },
                'imageFacebook.url': { $exists: true, $ne: null, $ne: '' }
             }
        ]
    };

    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> destinationCities >> findAllDestinationCitiesImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllDestinationCitiesImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllDestinationCityImages
}