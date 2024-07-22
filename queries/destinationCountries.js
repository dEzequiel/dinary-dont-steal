async function findAllDestinationCountriesImages(collection='destinationcountries', limit=1000, projection={
    'slug': 1,
    'title_es': 1,
    'mainImage': 1,
    'imageFacebook':1
}) {
    console.log('Queries >> destinationCountries >> findAllDestinationCountriesImages >> Start')
    const query = {
        $or: [
            { 'mainImage': { $exists: true, $ne: null, $ne: '' } },
            { 'captionImage': { $exists: true, $ne: null, $ne: '' } },
            { 'imageFacebook': { $exists: true, $ne: null, $ne: '' } }
        ]
    };

    try {
        const documents = await collection.find(query).project(projection).limit(limit).toArray()
        console.log('Queries >> destinationCountries >> findAllDestinationCountriesImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllDestinationCountriesImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

async function findAllDestinationCountryZonesImages(collection='destinationcountrieszones', limit=10, projection={
    'slug': 1,
    'title_es': 1,
    'mainImage': 1,
    'iconImage': 1
}) {
    console.log('Queries >> destinationCountries >> findAllDestinationCountryZonesImages >> Start')
    const query = {
        $or: [
            { 'mainImage': { $exists: true, $ne: null, $ne: '' } },
            { 'iconImage': { $exists: true, $ne: null, $ne: '' } }
        ]
    };

    try {
        const documents = await collection.find(query).project(projection).limit(limit).toArray()
        console.log('Queries >> destinationCountries >> findAllDestinationCountryZonesImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> findAllDestinationCountryZonesImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export {
    findAllDestinationCountriesImages,
    findAllDestinationCountryZonesImages
}