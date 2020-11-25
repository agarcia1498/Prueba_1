import {DefaultCrudRepository} from '@loopback/repository';
import {Facturas, FacturasRelations} from '../models';
import {Prueba1ssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacturasRepository extends DefaultCrudRepository<
  Facturas,
  typeof Facturas.prototype.id,
  FacturasRelations
> {
  constructor(
    @inject('datasources.prueba1ssql') dataSource: Prueba1ssqlDataSource,
  ) {
    super(Facturas, dataSource);
  }
}
