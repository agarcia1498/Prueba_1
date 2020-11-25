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
	import {DetalleFact} from '../models';
	import {DetalleFactRepository} from '../repositories';
	

	export class DetalleFactControllerController {
	  constructor(
	    @repository(DetalleFactRepository)
	    public DetalleFactRepository : DetalleFactRepository,
	  ) {}
	

	  @post('/DetalleFact', {
	    responses: {
	      '200': {
	        description: 'DetalleFact model instance',
	        content: {'application/json': {schema: getModelSchemaRef(DetalleFact)}},
	      },
	    },
	  })
	  async create(
	    @requestBody({
	      content: {
	        'application/json': {
	          schema: getModelSchemaRef(DetalleFact, {
	            title: 'NewDetalleFact',
	            
	          }),
	        },
	      },
	    })
	    DetalleFact: DetalleFact,
	  ): Promise<DetalleFact> {
	    return this.DetalleFactRepository.create(DetalleFact);
	  }
	

	  @get('/DetalleFacts/count', {
	    responses: {
	      '200': {
	        description: 'DetalleFact model count',
	        content: {'application/json': {schema: CountSchema}},
	      },
	    },
	  })
	  async count(
	    @param.where(DetalleFact) where?: Where<DetalleFact>,
	  ): Promise<Count> {
	    return this.DetalleFactRepository.count(where);
	  }
	

	  @get('/DetalleFacts', {
	    responses: {
	      '200': {
	        description: 'Array of DetalleFact model instances',
	        content: {
	          'application/json': {
	            schema: {
	              type: 'array',
	              items: getModelSchemaRef(DetalleFact, {includeRelations: true}),
	            },
	          },
	        },
	      },
	    },
	  })
	  async find(
	    @param.filter(DetalleFact) filter?: Filter<DetalleFact>,
	  ): Promise<DetalleFact[]> {
	    return this.DetalleFactRepository.find(filter);
	  }
	

	  @patch('/DetalleFacts', {
	    responses: {
	      '200': {
	        description: 'DetalleFact PATCH success count',
	        content: {'application/json': {schema: CountSchema}},
	      },
	    },
	  })
	  async updateAll(
	    @requestBody({
	      content: {
	        'application/json': {
	          schema: getModelSchemaRef(DetalleFact, {partial: true}),
	        },
	      },
	    })
	    DetalleFact: DetalleFact,
	    @param.where(DetalleFact) where?: Where<DetalleFact>,
	  ): Promise<Count> {
	    return this.DetalleFactRepository.updateAll(DetalleFact, where);
	  }
	

	  @get('/DetalleFacts/{id}', {
	    responses: {
	      '200': {
	        description: 'DetalleFact model instance',
	        content: {
	          'application/json': {
	            schema: getModelSchemaRef(DetalleFact, {includeRelations: true}),
	          },
	        },
	      },
	    },
	  })
	  async findById(
	    @param.path.number('id') id: number,
	    @param.filter(DetalleFact, {exclude: 'where'}) filter?: FilterExcludingWhere<DetalleFact>
	  ): Promise<DetalleFact> {
	    return this.DetalleFactRepository.findById(id, filter);
	  }
	

	  @patch('/DetalleFacts/{id}', {
	    responses: {
	      '204': {
	        description: 'DetalleFact PATCH success',
	      },
	    },
	  })
	  async updateById(
	    @param.path.number('id') id: number,
	    @requestBody({
	      content: {
	        'application/json': {
	          schema: getModelSchemaRef(DetalleFact, {partial: true}),
	        },
	      },
	    })
	    DetalleFact: DetalleFact,
	  ): Promise<void> {
	    await this.DetalleFactRepository.updateById(id, DetalleFact);
	  }
	

	  @put('/DetalleFacts/{id}', {
	    responses: {
	      '204': {
	        description: 'DetalleFact PUT success',
	      },
	    },
	  })
	  async replaceById(
	    @param.path.number('id') id: number,
	    @requestBody() DetalleFact: DetalleFact,
	  ): Promise<void> {
	    await this.DetalleFactRepository.replaceById(id, DetalleFact);
	  }
	

	  @del('/DetalleFacts/{id}', {
	    responses: {
	      '204': {
	        description: 'DetalleFact DELETE success',
	      },
	    },
	  })
	  async deleteById(@param.path.number('id') id: number): Promise<void> {
	    await this.DetalleFactRepository.deleteById(id);
	  }
	}
