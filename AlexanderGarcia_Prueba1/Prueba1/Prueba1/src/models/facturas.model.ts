import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Facturas'}}})
export class Facturas extends Entity {
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
    length: 10,
    mssql: {columnName: 'Total', dataType: 'nchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  total?: string;

  @property({
    type: 'number',
    precision: 10,
    scale: 0,
    mssql: {columnName: 'NumeroCaja', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES'},
  })
  numeroCaja?: number;

  @property({
    type: 'date',
    mssql: {columnName: 'Fecha', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecha?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Facturas>) {
    super(data);
  }
}

export interface FacturasRelations {
  // describe navigational properties here
}

export type FacturasWithRelations = Facturas & FacturasRelations;
