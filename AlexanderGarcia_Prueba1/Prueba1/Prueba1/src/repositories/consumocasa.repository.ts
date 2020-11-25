import {DefaultCrudRepository} from '@loopback/repository';
import {ConsumoCasa, ConsumoCasaRelations} from '../models';
import {Prueba1sqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ConsumoCasaRepository extends DefaultCrudRepository<
  ConsumoCasa,
  typeof ConsumoCasa.prototype.id,
  ConsumoCasaRelations
> {
  constructor(
    @inject('datasources.Prueba1sql') dataSource: Prueba1sqlDataSource,
  ) {
    super(ConsumoCasa, dataSource);
  }
}
