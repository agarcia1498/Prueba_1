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
import {PagoCliente} from '../models';
import {PagoClienteRepository} from '../repositories';

export class PagoClienteControllerController {
  constructor(
    @repository(PagoClienteRepository)
    public PagoClienteRepository : PagoClienteRepository,
  ) {}

  @post('/PagoCliente', {
    responses: {
      '200': {
        description: 'PagoCliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(PagoCliente)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagoCliente, {
            title: 'NewPagoCliente',
            
          }),
        },
      },
    })
    PagoCliente: PagoCliente,
  ): Promise<PagoCliente> {
    return this.PagoClienteRepository.create(PagoCliente);
  }

  @get('/PagoCliente/count', {
    responses: {
      '200': {
        description: 'PagoCliente model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(PagoCliente) where?: Where<PagoCliente>,
  ): Promise<Count> {
    return this.PagoClienteRepository.count(where);
  }

  @get('/PagoCliente', {
    responses: {
      '200': {
        description: 'Array of PagoCliente model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(PagoCliente, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(PagoCliente) filter?: Filter<PagoCliente>,
  ): Promise<PagoCliente[]> {
    return this.PagoClienteRepository.find(filter);
  }

  @patch('/PagoCliente', {
    responses: {
      '200': {
        description: 'PagoCliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagoCliente, {partial: true}),
        },
      },
    })
    PagoCliente: PagoCliente,
    @param.where(PagoCliente) where?: Where<PagoCliente>,
  ): Promise<Count> {
    return this.PagoClienteRepository.updateAll(PagoCliente, where);
  }

  @get('/PagoCliente/{id}', {
    responses: {
      '200': {
        description: 'PagoCliente model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PagoCliente, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PagoCliente, {exclude: 'where'}) filter?: FilterExcludingWhere<PagoCliente>
  ): Promise<PagoCliente> {
    return this.PagoClienteRepository.findById(id, filter);
  }

  @patch('/PagoCliente/{id}', {
    responses: {
      '204': {
        description: 'PagoCliente PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PagoCliente, {partial: true}),
        },
      },
    })
    PagoCliente: PagoCliente,
  ): Promise<void> {
    await this.PagoClienteRepository.updateById(id, PagoCliente);
  }

  @put('/PagoCliente/{id}', {
    responses: {
      '204': {
        description: 'PagoCliente PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() PagoCliente: PagoCliente,
  ): Promise<void> {
    await this.PagoClienteRepository.replaceById(id, PagoCliente);
  }

  @del('/PagoCliente/{id}', {
    responses: {
      '204': {
        description: 'PagoCliente DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.PagoClienteRepository.deleteById(id);
  }
}
