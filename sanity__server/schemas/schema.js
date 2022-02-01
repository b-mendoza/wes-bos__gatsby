import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';

import pizzaSchema from './pizza';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([pizzaSchema]),
});
