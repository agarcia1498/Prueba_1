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
import {ConsumoCasa} from '../models';
import {ConsumoCasaRepository} from '../repositories';

export class ConsumoCasaControllerController {
  constructor(
    @repository(ConsumoCasaRepository)
    public ConsumoCasaRepository : ConsumoCasaRepository,
  ) {}

  @post('/consumocasas', {
    responses: {
      '200': {
        description: 'ConsumoCasa model instance',
        content: {'application/json': {schema: getModelSchemaRef(ConsumoCasa)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsumoCasa, {
            title: 'NewConsumoCasa',
            
          }),
        },
      },
    })
    ConsumoCasa: ConsumoCasa,
  ): Promise<ConsumoCasa> {
    return this.ConsumoCasaRepository.create(ConsumoCasa);
  }

  @get('/ConsumoCasa/count', {
    responses: {
      '200': {
        description: 'ConsumoCasa model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(ConsumoCasa) where?: Where<ConsumoCasa>,
  ): Promise<Count> {
    return this.ConsumoCasaRepository.count(where);
  }

  @get('/ConsumoCasa', {
    responses: {
      '200': {
        description: 'Array of ConsumoCasa model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(ConsumoCasa, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(ConsumoCasa) filter?: Filter<ConsumoCasa>,
  ): Promise<ConsumoCasa[]> {
    return this.ConsumoCasaRepository.find(filter);
  }

  @patch('/ConsumoCasa', {
    responses: {
      '200': {
        description: 'ConsumoCasa PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsumoCasa, {partial: true}),
        },
      },
    })
    ConsumoCasa: ConsumoCasa,
    @param.where(ConsumoCasa) where?: Where<ConsumoCasa>,
  ): Promise<Count> {
    return this.ConsumoCasaRepository.updateAll(ConsumoCasa, where);
  }

  @get('/ConsumoCasa/{id}', {
    responses: {
      '200': {
        description: 'ConsumoCasa model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ConsumoCasa, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ConsumoCasa, {exclude: 'where'}) filter?: FilterExcludingWhere<ConsumoCasa>
  ): Promise<ConsumoCasa> {
    return this.ConsumoCasaRepository.findById(id, filter);
  }

  @patch('/consumocasas/{id}', {
    responses: {
      '204': {
        description: 'ConsumoCasa PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsumoCasa, {partial: true}),
        },
      },
    })
    ConsumoCasa: ConsumoCasa,
  ): Promise<void> {
    await this.ConsumoCasaRepository.updateById(id, ConsumoCasa);
  }

  @put('/consumocasas/{id}', {
    responses: {
      '204': {
        description: 'ConsumoCasa PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ConsumoCasa: ConsumoCasa,
  ): Promise<void> {
    await this.ConsumoCasaRepository.replaceById(id, ConsumoCasa);
  }

  @del('/ConsumoCasa/{id}', {
    responses: {
      '204': {
        description: 'ConsumoCasa DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ConsumoCasaRepository.deleteById(id);
  }
}

