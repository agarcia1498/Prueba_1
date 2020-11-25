import {DefaultCrudRepository} from '@loopback/repository';
import {CompraProveedor, CompraProveedorRelations} from '../models';
import {Prueba1sqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class compraproveedorRepository extends DefaultCrudRepository<
  CompraProveedor,
  typeof CompraProveedor.prototype.id,
  CompraProveedorRelations
> {
  constructor(
    @inject('datasources.prueba1sql') dataSource: Prueba1sqlDataSource,
  ) {
    super(CompraProveedor, dataSource);
  }
}
