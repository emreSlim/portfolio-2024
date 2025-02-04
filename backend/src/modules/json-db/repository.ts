import { Entity } from './entity';
import { JsonDB } from './json-db';

export class Repository<DataType> {
  constructor(private entity: Entity<DataType>) {}
  async save(data: DataType) {
    const db = await JsonDB.getDB();
    db[this.entity.name] = db[this.entity.name] || [];
    db[this.entity.name].push(data);
    JsonDB.saveDB();
  }

  async find({ where }: { where: Partial<DataType> }) {
    const db = await JsonDB.getDB();
    return db[this.entity.name].filter((data: DataType) =>
      Object.entries(where).every(([key, value]) => data[key] === value)
    );
  }

  async findOne({ where }: { where: Partial<DataType> }) {
    const db = await JsonDB.getDB();
    return db[this.entity.name].find((data: DataType) =>
      Object.entries(where).every(([key, value]) => data[key] === value)
    );
  }

  async update(
    { where }: { where: Partial<DataType> },
    data: Partial<DataType>
  ) {
    const db = await JsonDB.getDB();
    db[this.entity.name] = db[this.entity.name].map((oldData: DataType) =>
      Object.entries(where).every(([key, value]) => oldData[key] === value)
        ? { ...oldData, ...data }
        : oldData
    );
    JsonDB.saveDB();
  }
}
