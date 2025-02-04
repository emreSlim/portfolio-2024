export class JsonDB {
  private static db = undefined as Record<string, unknown[]> | undefined;
  private static fetchDBPromise = undefined as Promise<any> | undefined;

  private static async fetchDB() {
    try {
      // fetch from remote file
    } catch (e) {
      console.error(e);
    } finally {
      JsonDB.fetchDBPromise = undefined;
    }
  }

  static async getDB() {
    if (JsonDB.db === undefined) {
      JsonDB.fetchDBPromise = JsonDB.fetchDB();
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
    }, JsonDB.saveDelay);
  }
}
