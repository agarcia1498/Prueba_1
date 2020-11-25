import {DefaultCrudRepository} from '@loopback/repository';
import {Sysdiagrams, SysdiagramsRelations} from '../models';
import {Prueba1ssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SysdiagramsRepository extends DefaultCrudRepository<
  Sysdiagrams,
  typeof Sysdiagrams.prototype.diagramId,
  SysdiagramsRelations
> {
  constructor(
    @inject('datasources.Prueba1ssql') dataSource: Prueba1ssqlDataSource,
  ) {
    super(Sysdiagrams, dataSource);
  }
}
