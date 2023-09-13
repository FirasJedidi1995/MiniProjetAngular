import {Entity, model, property} from '@loopback/repository';

@model()
export class Personne extends Entity {
  
  @property({
    type: 'string',
    required: true,
  })
  firstname: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  cin?: number;

  @property({
    type: 'string',
    required: true,
  })
  job: string;

  @property({
    type: 'string',
  })
  path?: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;

  constructor(data?: Partial<Personne>) {
    super(data);
  }
}

export interface PersonneRelations {
  // describe navigational properties here
}

export type PersonneWithRelations = Personne & PersonneRelations;
