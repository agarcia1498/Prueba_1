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
import {Facturas} from '../models';
import {FacturasRepository} from '../repositories';

export class FacturasControllerController {
  constructor(
    @repository(FacturasRepository)
    public facturasRepository : FacturasRepository,
  ) {}

  @post('/facturas', {
    responses: {
      '200': {
        description: 'Facturas model instance',
        content: {'application/json': {schema: getModelSchemaRef(Facturas)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturas, {
            title: 'NewFacturas',
            
          }),
        },
      },
    })
    facturas: Facturas,
  ): Promise<Facturas> {
    return this.facturasRepository.create(facturas);
  }

  @get('/facturas/count', {
    responses: {
      '200': {
        description: 'Facturas model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Facturas) where?: Where<Facturas>,
  ): Promise<Count> {
    return this.facturasRepository.count(where);
  }

  @get('/facturas', {
    responses: {
      '200': {
        description: 'Array of Facturas model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Facturas, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Facturas) filter?: Filter<Facturas>,
  ): Promise<Facturas[]> {
    return this.facturasRepository.find(filter);
  }

  @patch('/facturas', {
    responses: {
      '200': {
        description: 'Facturas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturas, {partial: true}),
        },
      },
    })
    facturas: Facturas,
    @param.where(Facturas) where?: Where<Facturas>,
  ): Promise<Count> {
    return this.facturasRepository.updateAll(facturas, where);
  }

  @get('/facturas/{id}', {
    responses: {
      '200': {
        description: 'Facturas model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Facturas, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Facturas, {exclude: 'where'}) filter?: FilterExcludingWhere<Facturas>
  ): Promise<Facturas> {
    return this.facturasRepository.findById(id, filter);
  }

  @patch('/facturas/{id}', {
    responses: {
      '204': {
        description: 'Facturas PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Facturas, {partial: true}),
        },
      },
    })
    facturas: Facturas,
  ): Promise<void> {
    await this.facturasRepository.updateById(id, facturas);
  }

  @put('/facturas/{id}', {
    responses: {
      '204': {
        description: 'Facturas PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() facturas: Facturas,
  ): Promise<void> {
    await this.facturasRepository.replaceById(id, facturas);
  }

  @del('/facturas/{id}', {
    responses: {
      '204': {
        description: 'Facturas DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.facturasRepository.deleteById(id);
  }
}
