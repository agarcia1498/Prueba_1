import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Articulos'}}})
export class Articulos extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'Id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    length: 50,
    mssql: {columnName: 'Descripcion', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  descripcion?: string;

  @property({
    type: 'number',
    precision: 18,
    scale: 2,
    mssql: {columnName: 'CostoUnitario', dataType: 'decimal', dataLength: null, dataPrecision: 18, dataScale: 2, nullable: 'YES'},
  })
  costoUnitario?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Articulos>) {
    super(data);
  }
}

export interface ArticulosRelations {
  // describe navigational properties here
}

export type ArticulosWithRelations = Articulos & ArticulosRelations;
