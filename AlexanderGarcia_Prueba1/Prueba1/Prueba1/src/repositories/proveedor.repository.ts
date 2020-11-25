import {DefaultCrudRepository} from '@loopback/repository';
import {Proveedor, ProveedorRelations} from '../models';
import {Prueba1ssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedorRepository extends DefaultCrudRepository<
  Proveedor,
  typeof Proveedor.prototype.id,
  ProveedorRelations
> {
  constructor(
    @inject('datasources.Prueba1ssql') dataSource: Prueba1ssqlDataSource,
  ) {
    super(Proveedor, dataSource);
  }
}
