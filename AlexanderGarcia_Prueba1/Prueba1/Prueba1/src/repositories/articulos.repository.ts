import {DefaultCrudRepository} from '@loopback/repository';
import {Articulos, ArticulosRelations} from '../models';
import {Prueba1sqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArticulosRepository extends DefaultCrudRepository<
  Articulos,
  typeof Articulos.prototype.id,
  ArticulosRelations
> {
  constructor(
    @inject('datasources.Prueba1ssql') dataSource: Prueba1ssqlDataSource,
  ) {
    super(Articulos, dataSource);
  }
}
