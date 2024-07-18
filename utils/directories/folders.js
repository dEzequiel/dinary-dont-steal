import * as fs from 'fs';
import { normalize } from 'path';

function createFolder(folderName) {
    let folder = normalize(`downloads/${folderName}`);
    if(!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
        console.log(`${folder} created`);
    }

    return folder;
}

function createFolderForEntity(path, entity) {
    const folderPath = createFolder(`${path}/${entity}`);
    if(!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, {  recursive: true  })
    }

    return folderPath
}

export {
    createFolder,
    createFolderForEntity
}