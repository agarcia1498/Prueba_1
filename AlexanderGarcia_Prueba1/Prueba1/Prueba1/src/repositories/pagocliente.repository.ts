import {DefaultCrudRepository} from '@loopback/repository';
import {PagoCliente, PagoClienteRelations} from '../models';
import {Prueba1ssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PagoClienteRepository extends DefaultCrudRepository<
  PagoCliente,
  typeof PagosDeCliente.prototype.id,
  PagoClienteRelations
> {
  constructor(
    @inject('datasources.prueba1ssql') dataSource: Prueba1ssqlDataSource,
  ) {
    super(PagoCliente, dataSource);
  }
}
