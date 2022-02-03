import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import pizzaType from './types/pizza';
import slicemasterType from './types/slicemaster';
import toppingType from './types/topping';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([slicemasterType, pizzaType, toppingType]),
});
