import express from 'express';
import { validate } from 'jsonschema';

import createUserSchema from './schemas/users/createUser.json';

const server = express();

const data = {
  productId: 1,
  productName: 'Sculpture1',
  price: 1,
  email: 'steve@bob.com',
  tags: ['cold', 'ice'],
  dimensions: {
    length: 7.0,
    width: 12.0,
    height: 9
  }
};

const result = validate(data, createUserSchema);

console.log('-------------', result);

server.listen(3111, () => console.log(`Server has started on port ${3111}`));
