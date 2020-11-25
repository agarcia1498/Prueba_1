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
import {HistPagoCliente} from '../models';
import {HistPagoClienteRepository} from '../repositories';

export class HistPagoClienteControllerController {
  constructor(
    @repository(HistPagoClienteRepository)
    public HistPagoClienteRepository : HistPagoClienteRepository,
  ) {}

  @post('/HistPagoCliente', {
    responses: {
      '200': {
        description: 'HistPagoCliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(HistPagoCliente)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistPagoCliente, {
            title: 'NewHistPagoCliente',
            
          }),
        },
      },
    })
    HistPagoCliente: HistPagoCliente,
  ): Promise<HistPagoCliente> {
    return this.HistPagoClienteRepository.create(HistPagoCliente);
  }

  @get('/HistPagoCliente/count', {
    responses: {
      '200': {
        description: 'HistPagoCliente model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(HistPagoCliente) where?: Where<HistPagoCliente>,
  ): Promise<Count> {
    return this.HistPagoClienteRepository.count(where);
  }

  @get('/HistPagoCliente', {
    responses: {
      '200': {
        description: 'Array of HistPagoCliente model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(HistPagoCliente, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(HistPagoCliente) filter?: Filter<HistPagoCliente>,
  ): Promise<HistPagoCliente[]> {
    return this.HistPagoClienteRepository.find(filter);
  }

  @patch('/HistPagoCliente', {
    responses: {
      '200': {
        description: 'HistPagoCliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistPagoCliente, {partial: true}),
        },
      },
    })
    HistPagoCliente: HistPagoCliente,
    @param.where(HistPagoCliente) where?: Where<HistPagoCliente>,
  ): Promise<Count> {
    return this.HistPagoClienteRepository.updateAll(HistPagoCliente, where);
  }

  @get('/HistPagoCliente/{id}', {
    responses: {
      '200': {
        description: 'HistPagoCliente model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(HistPagoCliente, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(HistPagoCliente, {exclude: 'where'}) filter?: FilterExcludingWhere<HistPagoCliente>
  ): Promise<HistPagoCliente> {
    return this.HistPagoClienteRepository.findById(id, filter);
  }

  @patch('/HistPagoCliente/{id}', {
    responses: {
      '204': {
        description: 'HistPagoCliente PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HistPagoCliente, {partial: true}),
        },
      },
    })
    HistPagoCliente: HistPagoCliente,
  ): Promise<void> {
    await this.HistPagoClienteRepository.updateById(id, HistPagoCliente);
  }

  @put('/HistPagoCliente/{id}', {
    responses: {
      '204': {
        description: 'HistPagoCliente PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() HistPagoCliente: HistPagoCliente,
  ): Promise<void> {
    await this.HistPagoClienteRepository.replaceById(id, HistPagoCliente);
  }

  @del('/HistPagoCliente/{id}', {
    responses: {
      '204': {
        description: 'HistPagoCliente DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.HistPagoClienteRepository.deleteById(id);
  }
}
