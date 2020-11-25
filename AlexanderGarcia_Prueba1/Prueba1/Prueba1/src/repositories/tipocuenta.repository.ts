import {DefaultCrudRepository} from '@loopback/repository';
import {TipoCuenta, TipoCuentaRelations} from '../models';
import {Prueba1ssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TipoCuentaRepository extends DefaultCrudRepository<
  TipoCuenta,
  typeof TipoCuentas.prototype.id,
  TipoCuentaRelations
> {
  constructor(
    @inject('datasources.Prueba1ssql') dataSource: Prueba1ssqlDataSource,
  ) {
    super(TipoCuentas, dataSource);
  }
}
