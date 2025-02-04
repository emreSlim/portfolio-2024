import { readFile, writeFile } from 'fs';

export class JsonDB {
  private static db = undefined as Record<string, any[]> | undefined;
  private static fetchDBPromise = undefined as Promise<any> | undefined;

  private static async fetchDB() {
    try {
      // fetch from remote file
      return await new Promise((resolve, reject) => {
        readFile('db.json', 'utf8', (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(data) ?? {});
          }
        });
      });
    } catch (e) {
      console.error(e);
      throw e;
    } finally {
      JsonDB.fetchDBPromise = undefined;
    }
  }

  static async getDB() {
    if (JsonDB.db == null || Object.keys(JsonDB.db).length === 0) {
      JsonDB.fetchDBPromise = JsonDB.fetchDB();
      JsonDB.db = await JsonDB.fetchDBPromise;
    } else if (JsonDB.fetchDBPromise) {
      JsonDB.db = await JsonDB.fetchDBPromise;
    }
    return JsonDB.db;
  }

  private static saveTimeout = undefined as NodeJS.Timeout;
  private static saveDelay = 1000;

  static saveDB() {
    clearTimeout(JsonDB.saveTimeout);
    JsonDB.saveTimeout = setTimeout(() => {
      // save to remote file
      writeFile('db.json', JSON.stringify(JsonDB.db), (err) => {
        if (err) {
          console.error(err);
        }
      });
    }, JsonDB.saveDelay);
  }

  static async getTable(tableName: string) {
    const db = await JsonDB.getDB();

    return db[tableName] || [];
  }

  static saveTable(tableName: string, data: any[]) {
    JsonDB.db[tableName] = data;
    JsonDB.saveDB();
  }
}
