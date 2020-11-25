import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'PagoCliente'}}
})
export class PagoCliente extends Entity {
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
    mssql: {columnName: 'Cantidad', dataType: 'decimal', dataLength: null, dataPrecision: 18, dataScale: 2, nullable: 'YES'},
  })
  cantidad?: number;

  @property({
    type: 'date',
    mssql: {columnName: 'Fecha', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  fecha?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PagoCliente>) {
    super(data);
  }
}

export interface PagoClienteRelations {
  // describe navigational properties here
}

export type PagoClienteWithRelations = PagoCliente & PagoClienteRelations;
