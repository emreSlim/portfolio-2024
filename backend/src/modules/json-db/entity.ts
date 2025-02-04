import { Column, ColumnType } from './column';

export class Entity<T> {
  schema = {} as Record<keyof T, ColumnType | string>;
  dataType: T;

  constructor(
    public name: string,
    public columns: Column<keyof T>[]
  ) {
    columns.forEach((column) => {
      this.schema[column.name] =
        column.type instanceof Entity ? column.type.name : column.type;
    });
  }
}
