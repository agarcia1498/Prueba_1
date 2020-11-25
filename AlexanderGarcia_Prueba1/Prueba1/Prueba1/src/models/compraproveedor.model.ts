import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'CompraProveedor'}}
})
export class CompraProveedor extends Entity {
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
    type: 'number',
    precision: 18,
    scale: 2,
    mssql: {columnName: 'Total', dataType: 'decimal', dataLength: null, dataPrecision: 18, dataScale: 2, nullable: 'YES'},
  })
  total?: number;

  @property({
    type: 'number',
    precision: 18,
    scale: 2,
    mssql: {columnName: 'Impuesto', dataType: 'decimal', dataLength: null, dataPrecision: 18, dataScale: 2, nullable: 'YES'},
  })
  impuesto?: number;

  @property({
    type: 'date',
    mssql: {columnName: 'Fecha', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecha?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CompraProveedor>) {
    super(data);
  }
}

export interface CompraProveedorRelations {
  // describe navigational properties here
}

export type CompraProveedorWithRelations = CompraProveedor & CompraProveedorRelations;
