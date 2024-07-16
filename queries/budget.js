async function findAllBudgetProductImages(collection='budgetproducts', limit=10, projection={
    'name': 1,
    'slug': 1,
    'productimage': 1,
}) {
    console.log('Queries >> budget >> findAllBudgetProductImages >> Start')
    
    const query = {
        'productimage': { $exists: true, $ne: null, $ne: '' },
        'productimage.url': { $exists: true, $ne: null, $ne: '' },
    }

    try {
        const documents = await collection.find(query).project(projection).limit(limit).toArray()
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