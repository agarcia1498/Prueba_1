import {DefaultCrudRepository} from '@loopback/repository';
import {DetalleFact, DetalleFactRelations} from '../models';
import {Prueba1sqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DetalleFactRepository extends DefaultCrudRepository<
  DetalleFact,
  typeof DetalleFact.prototype.id,
  DetalleFactRelations
> {
  constructor(
    @inject('datasources.prueba1sql') dataSource: Prueba1sqlDataSource,
  ) {
    super(DetalleFact, dataSource);
  }
}
