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
import {Compraaproveedor} from '../models';
import {CompraaproveedorRepository} from '../repositories';

export class CompraaproveedorControllerController {
  constructor(
    @repository(CompraaproveedorRepository)
    public compraaproveedorRepository : CompraaproveedorRepository,
  ) {}

  @post('/compra-a-proveedores', {
    responses: {
      '200': {
        description: 'Compraaproveedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Compraaproveedor)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compraaproveedor, {
            title: 'NewCompraaproveedor',
            
          }),
        },
      },
    })
    compraaproveedor: Compraaproveedor,
  ): Promise<Compraaproveedor> {
    return this.compraaproveedorRepository.create(compraaproveedor);
  }

  @get('/compra-a-proveedores/count', {
    responses: {
      '200': {
        description: 'Compraaproveedor model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Compraaproveedor) where?: Where<Compraaproveedor>,
  ): Promise<Count> {
    return this.compraaproveedorRepository.count(where);
  }

  @get('/compra-a-proveedores', {
    responses: {
      '200': {
        description: 'Array of Compraaproveedor model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Compraaproveedor, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Compraaproveedor) filter?: Filter<Compraaproveedor>,
  ): Promise<Compraaproveedor[]> {
    return this.compraaproveedorRepository.find(filter);
  }

  @patch('/compra-a-proveedores', {
    responses: {
      '200': {
        description: 'Compraaproveedor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compraaproveedor, {partial: true}),
        },
      },
    })
    compraaproveedor: Compraaproveedor,
    @param.where(Compraaproveedor) where?: Where<Compraaproveedor>,
  ): Promise<Count> {
    return this.compraaproveedorRepository.updateAll(compraaproveedor, where);
  }

  @get('/compra-a-proveedores/{id}', {
    responses: {
      '200': {
        description: 'Compraaproveedor model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Compraaproveedor, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Compraaproveedor, {exclude: 'where'}) filter?: FilterExcludingWhere<Compraaproveedor>
  ): Promise<Compraaproveedor> {
    return this.compraaproveedorRepository.findById(id, filter);
  }

  @patch('/compra-a-proveedores/{id}', {
    responses: {
      '204': {
        description: 'Compraaproveedor PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compraaproveedor, {partial: true}),
        },
      },
    })
    compraaproveedor: Compraaproveedor,
  ): Promise<void> {
    await this.compraaproveedorRepository.updateById(id, compraaproveedor);
  }

  @put('/compra-a-proveedores/{id}', {
    responses: {
      '204': {
        description: 'Compraaproveedor PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() compraaproveedor: Compraaproveedor,
  ): Promise<void> {
    await this.compraaproveedorRepository.replaceById(id, compraaproveedor);
  }

  @del('/compra-a-proveedores/{id}', {
    responses: {
      '204': {
        description: 'Compraaproveedor DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.compraaproveedorRepository.deleteById(id);
  }
}

