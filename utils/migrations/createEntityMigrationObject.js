
export let migration_objects = []
function createEntityMigrationObject(collection_name, entity_id, object_property, entity_path, nature) {
    const key = `${collection_name}-${entity_id}-${object_property}`
    migration_objects.push({
        [key]: {
            container: nature,
            blob: 'uploads/whatever',
            original_path: entity_path,
            new_path: '[full-blob-url]'
        }
    })
}

export function createAffiliateMigrationObject(affiliate) {
    if(affiliate.images) {
        if(affiliate.images.logo && !affiliate.images.photo) {
            createEntityMigrationObject('affiliates', affiliate.id, 'images.logo.url', affiliate.images.logo, 'public')
        } else if(affiliate.images.photo && !affiliate.images.logo) {
            createEntityMigrationObject('affiliates', affiliate.id, 'images.photo.url', affiliate.images.photo, 'public')
        } else if(affiliate.images.logo && affiliate.images.photo) {
            createEntityMigrationObject('affiliates', affiliate.id, 'images.logo.url', affiliate.images.logo, 'public')
            createEntityMigrationObject('affiliates', affiliate.id, 'images.photo.url', affiliate.images.photo, 'public')
        }
    } else {
        return;
    }
}

export function createAffiliateFAQMigrationObject(affiliateFAQ) {
    if(affiliateFAQ.images && affiliateFAQ.images.length > 0) {
        affiliateFAQ.images.forEach(image => {
            createEntityMigrationObject('affiliate faqs', affiliateFAQ.id, 'images.url', image.url, 'public')
        })
    }
}