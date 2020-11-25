import {DefaultCrudRepository} from '@loopback/repository';
import {CompraProvDetalle, CompraProvDetalleRelations} from '../models';
import {Prueba1ssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CompraProvDetalleRepository extends DefaultCrudRepository<
  CompraProvDetalle,
  typeof CompraAProveedoresDetalle.prototype.id,
  CompraProvDetalleRelations
> {
  constructor(
    @inject('datasources.Prueba1ssql') dataSource: Prueba1ssqlDataSource,
  ) {
    super(CompraProveDetalle, dataSource);
  }
}
