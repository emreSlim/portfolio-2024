import { Storage } from '@google-cloud/storage';

const storage = new Storage();

const fileName = 'db.json';
const bucketName = 'portfolio-2024-imran';

export async function downloadDbJson(): Promise<object> {
  try {
    const res = await storage.bucket(bucketName).file(fileName).download();
    const object = JSON.parse(res.toString());
    console.log(`${fileName} downloaded from ${bucketName}.`);
    return object;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function uploadDbJson(object: object): Promise<void> {
  try {
    await storage
      .bucket(bucketName)
      .file(fileName)
      .save(JSON.stringify(object));
    console.log(`${fileName} uploaded to ${bucketName}.`);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
