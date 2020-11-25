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
import {Proveedor} from '../models';
import {ProveedorRepository} from '../repositories';

export class ProveedorControllerController {
  constructor(
    @repository(ProveedorRepository)
    public ProveedorRepository : ProveedorRepository,
  ) {}

  @post('/Proveedor', {
    responses: {
      '200': {
        description: 'Proveedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Proveedor)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proveedor, {
            title: 'NewProveedor',
            
          }),
        },
      },
    })
    Proveedor: Proveedor,
  ): Promise<Proveedor> {
    return this.ProveedorRepository.create(Proveedor);
  }

  @get('/Proveedor/count', {
    responses: {
      '200': {
        description: 'Proveedor model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Proveedor) where?: Where<Proveedor>,
  ): Promise<Count> {
    return this.ProveedorRepository.count(where);
  }

  @get('/Proveedor', {
    responses: {
      '200': {
        description: 'Array of Proveedor model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Proveedor, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Proveedor) filter?: Filter<Proveedor>,
  ): Promise<Proveedor[]> {
    return this.ProveedorRepository.find(filter);
  }

  @patch('/Proveedor', {
    responses: {
      '200': {
        description: 'Proveedor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proveedor, {partial: true}),
        },
      },
    })
    Proveedor: Proveedor,
    @param.where(Proveedor) where?: Where<Proveedor>,
  ): Promise<Count> {
    return this.ProveedorRepository.updateAll(Proveedor, where);
  }

  @get('/Proveedor/{id}', {
    responses: {
      '200': {
        description: 'Proveedor model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Proveedor, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Proveedor, {exclude: 'where'}) filter?: FilterExcludingWhere<Proveedor>
  ): Promise<Proveedor> {
    return this.ProveedorRepository.findById(id, filter);
  }

  @patch('/Proveedor/{id}', {
    responses: {
      '204': {
        description: 'Proveedor PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proveedor, {partial: true}),
        },
      },
    })
    Proveedor: Proveedor,
  ): Promise<void> {
    await this.ProveedorRepository.updateById(id, Proveedor);
  }

  @put('/Proveedor/{id}', {
    responses: {
      '204': {
        description: 'Proveedor PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() Proveedor: Proveedor,
  ): Promise<void> {
    await this.ProveedorRepository.replaceById(id, Proveedor);
  }

  @del('/Proveedor/{id}', {
    responses: {
      '204': {
        description: 'Proveedor DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ProveedorRepository.deleteById(id);
  }
}
