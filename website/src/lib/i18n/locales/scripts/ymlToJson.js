import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import YAML from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = `${__dirname}/..`;

const files = fs.readdirSync(folderPath);

// @ts-ignore
function flattenJson(obj, prefix = '') {
    let result = {};
    for (const key in obj) {
        const newKey = prefix ? `${prefix}.${key}` : key;

        // skip empty keys
        if (obj[key] == '') continue;

        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result = { ...result, ...flattenJson(obj[key], newKey) };
        } else {
            // @ts-ignore
            result[newKey] = obj[key];
        }
    }

    return result;
}

files.forEach((file) => {
    if (file.endsWith('.yml')) {
        const filePath = path.join(folderPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const inputJson = YAML.parse(fileContent);

        const outputJson = flattenJson(inputJson);

        const outputFileName = `${path.basename(file, '.yml')}.json`;
        const outputFilePath = path.join(folderPath, outputFileName);

        if (!fs.existsSync(outputFilePath)) {
            fs.writeFileSync(outputFilePath, '');
        }

        fs.writeFileSync(outputFilePath, JSON.stringify(outputJson, null, 2));
    }
});
