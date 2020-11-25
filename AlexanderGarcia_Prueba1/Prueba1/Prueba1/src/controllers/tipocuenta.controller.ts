import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {TipoCuenta} from '../models';
import {TipoCuentaRepository} from '../repositories';

export class TipoCuentaControllerController {
  constructor(
    @repository(TipoCuentaRepository)
    public TipoCuentaRepository : TipoCuentaRepository,
  ) {}

  @post('/TipoCuenta', {
    responses: {
      '200': {
        description: 'TipoCuentamodel instance',
        content: {'application/json': {schema: getModelSchemaRef(TipoCuenta)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoCuenta, {
            title: 'NewTipoCuenta',
            exclude: ['id'],
          }),
        },
      },
    })
    TipoCuenta: Omit<TipoCuenta, 'id'>,
  ): Promise<TipoCuenta> {
    return this.TipoCuentaRepository.create(TipoCuenta);
  }

  @get('/TipoCuenta/count', {
    responses: {
      '200': {
        description: 'TipoCuentamodel count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(TipoCuenta) where?: Where<TipoCuenta>,
  ): Promise<Count> {
    return this.TipoCuentaRepository.count(where);
  }

  @get('/TipoCuenta', {
    responses: {
      '200': {
        description: 'Array of TipoCuentamodel instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(TipoCuenta, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(TipoCuenta) filter?: Filter<TipoCuenta>,
  ): Promise<TipoCuenta[]> {
    return this.TipoCuentaRepository.find(filter);
  }

  @patch('/TipoCuenta', {
    responses: {
      '200': {
        description: 'TipoCuentaPATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoCuenta, {partial: true}),
        },
      },
    })
    TipoCuenta: TipoCuenta,
    @param.where(TipoCuenta) where?: Where<TipoCuenta>,
  ): Promise<Count> {
    return this.TipoCuentaRepository.updateAll(TipoCuenta, where);
  }

  @get('/TipoCuenta/{id}', {
    responses: {
      '200': {
        description: 'TipoCuentamodel instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(TipoCuenta, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TipoCuenta, {exclude: 'where'}) filter?: FilterExcludingWhere<TipoCuenta>
  ): Promise<TipoCuenta> {
    return this.TipoCuentaRepository.findById(id, filter);
  }

  @patch('/TipoCuenta/{id}', {
    responses: {
      '204': {
        description: 'TipoCuentaPATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoCuenta, {partial: true}),
        },
      },
    })
    TipoCuenta: TipoCuenta,
  ): Promise<void> {
    await this.TipoCuentaRepository.updateById(id, TipoCuenta);
  }

  @put('/TipoCuenta/{id}', {
    responses: {
      '204': {
        description: 'TipoCuentaPUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() TipoCuenta: TipoCuenta,
  ): Promise<void> {
    await this.TipoCuentaRepository.replaceById(id, TipoCuenta);
  }

  @del('/TipoCuenta/{id}', {
    responses: {
      '204': {
        description: 'TipoCuentaDELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.TipoCuentaRepository.deleteById(id);
  }
}
