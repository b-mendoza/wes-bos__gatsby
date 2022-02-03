import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import personType from './person';
import pizzaType from './pizza';
import toppingType from './topping';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([personType, pizzaType, toppingType]),
});
