import {DefaultCrudRepository} from '@loopback/repository';
import {Inventario, InventarioRelations} from '../models';
import {Prueba1ssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InventarioRepository extends DefaultCrudRepository<
  Inventario,
  typeof Inventario.prototype.idArticulo,
  InventarioRelations
> {
  constructor(
    @inject('datasources.prueba1ssql') dataSource: Prueba1ssqlDataSource,
  ) {
    super(Inventario, dataSource);
  }
}
