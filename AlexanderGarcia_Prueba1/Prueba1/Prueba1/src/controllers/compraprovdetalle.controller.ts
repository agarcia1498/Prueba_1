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
import {Compraprovdetalle} from '../models';
import {CompraprovdetalleRepository} from '../repositories';

export class CompraprovdetalleControllerController {
  constructor(
    @repository(CompraprovdetalleRepository)
    public compraprovdetalleRepository : CompraprovdetalleRepository,
  ) {}

  @post('/compra-a-proveedores-detalles', {
    responses: {
      '200': {
        description: 'Compraprovdetallemodel instance',
        content: {'application/json': {schema: getModelSchemaRef(Compraprovdetalle)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compraprovdetalle, {
            title: 'NewCompraprovdetalle',
            
          }),
        },
      },
    })
    compraprovdetalle: Compraprovdetalle,
  ): Promise<Compraprovdetalle> {
    return this.compraprovdetalleRepository.create(compraprovdetalle);
  }

  @get('/compra-a-proveedores-detalles/count', {
    responses: {
      '200': {
        description: 'Compraprovdetallemodel count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Compraprovdetalle) where?: Where<Compraprovdetalle>,
  ): Promise<Count> {
    return this.compraprovdetalleRepository.count(where);
  }

  @get('/compra-a-proveedores-detalles', {
    responses: {
      '200': {
        description: 'Array of Compraprovdetallemodel instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Compraprovdetalle, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Compraprovdetalle) filter?: Filter<Compraprovdetalle>,
  ): Promise<Compraprovdetalle[]> {
    return this.compraprovdetalleRepository.find(filter);
  }

  @patch('/compra-a-proveedores-detalles', {
    responses: {
      '200': {
        description: 'CompraprovdetallePATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compraprovdetalle, {partial: true}),
        },
      },
    })
    compraprovdetalle: Compraprovdetalle,
    @param.where(Compraprovdetalle) where?: Where<Compraprovdetalle>,
  ): Promise<Count> {
    return this.compraprovdetalleRepository.updateAll(compraprovdetalle, where);
  }

  @get('/compra-a-proveedores-detalles/{id}', {
    responses: {
      '200': {
        description: 'Compraprovdetallemodel instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Compraprovdetalle, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Compraprovdetalle, {exclude: 'where'}) filter?: FilterExcludingWhere<Compraprovdetalle>
  ): Promise<Compraprovdetalle> {
    return this.compraprovdetalleRepository.findById(id, filter);
  }

  @patch('/compra-a-proveedores-detalles/{id}', {
    responses: {
      '204': {
        description: 'CompraprovdetallePATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compraprovdetalle, {partial: true}),
        },
      },
    })
    compraprovdetalle: Compraprovdetalle,
  ): Promise<void> {
    await this.compraprovdetalleRepository.updateById(id, compraprovdetalle);
  }

  @put('/compra-a-proveedores-detalles/{id}', {
    responses: {
      '204': {
        description: 'CompraprovdetallePUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() compraprovdetalle: compraprovdetalle,
  ): Promise<void> {
    await this.compraprovdetalleRepository.replaceById(id, compraprovdetalle);
  }

  @del('/compra-a-proveedores-detalles/{id}', {
    responses: {
      '204': {
        description: 'CompraprovdetalleDELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this. compraprovdetalleRepository.deleteById(id);
  }
}
