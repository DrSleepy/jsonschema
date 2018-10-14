import express from 'express';
import { validate } from 'jsonschema';

import createUserSchema from './schemas/users/createUser.json';

const server = express();

const data = {
  productId: 1,
  productName: 'An ice sculpture',
  tags: ['cold', 'ice'],
  dimensions: {
    length: 7.0,
    width: 12.0
  }
};

console.log('----------');
console.log(validate(data, createUserSchema));

server.listen(3111, () => console.log(`Server has started on port ${3111}`));
