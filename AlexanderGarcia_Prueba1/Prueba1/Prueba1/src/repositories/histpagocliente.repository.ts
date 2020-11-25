import {DefaultCrudRepository} from '@loopback/repository';
import {HistPagoCliente, HistPagoClienteRelations} from '../models';
import {Prueba1ssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HistPagoClienteRepository extends DefaultCrudRepository<
  HistPagoCliente,
  typeof HistPagoCliente.prototype.id,
  HistPagoClienteRelations
> {
  constructor(
    @inject('datasources.prueba1ssql') dataSource: Prueba1ssqlDataSource,
  ) {
    super(HistPagoCliente, dataSource);
  }
}
