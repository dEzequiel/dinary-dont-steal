async function findAllBudgetProductImages(collection='budgetproducts', skip=0, limit=0, projection={
    'name': 1,
    'slug': 1,
    'productimage': 1,
    'itinerary': 1
}) {
    console.log('Queries >> budget >> findAllBudgetProductImages >> Start')
    
    const query = {
        $or: [
            {
                'productimage': { $exists: true, $ne: null, $ne: '' },
                'productimage.url': { $exists: true, $ne: null, $ne: '' }
            },
            {
                'itinerary': {
                    $elemMatch: {
                        'image': { $exists: true },
                        'image.url': { $exists: true, $ne: '' } // Assuming 'url' is a key within the 'image' object you're interested in
                    }
                }
            }
        ]
    };

    try {
        const documents = await collection.find(query).project(projection).skip(skip).limit(limit).toArray()
        console.log('Queries >> budget >> findAllBudgetProductImages >> End')
        return documents
    } catch (error) {
        console.log('Queries >> budget >> findAllBudgetProductImages >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}
export {
    findAllBudgetProductImages
}