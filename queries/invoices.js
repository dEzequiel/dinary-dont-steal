async function findAllInvoicesWithFiles(collection='invoices', limit=10, projection={
    'name': 1,
    'file': 1,
}) {
    console.log('Queries >> invoices >> findAllInvoicesWithFiles >> Start')
    const query = {
        'file': { $exists: true, $ne: null, $ne: '' },
        'file.url': { $exists: true, $ne: null, $ne: '' }    
    };
    try {
        const documents = await collection.find(query).project(projection).limit(limit).toArray()
        console.log('Queries >> invoices >> findAllInvoicesWithFiles >> End')
        return documents
    } catch (error) {
        console.log('Queries >> invoices >> findAllInvoicesWithFiles >> Error')
        console.error('Error finding documents:', error);
        throw error;
    }
}

export { findAllInvoicesWithFiles }