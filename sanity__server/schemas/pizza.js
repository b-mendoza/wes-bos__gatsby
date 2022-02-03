import { MdLocalPizza } from '@react-icons/all-files/md/MdLocalPizza';

const NAME_FIELD = {
  description: 'Name of the Pizza',
  name: 'name',
  title: 'Pizza Name',
  type: 'string',
};

const SLUG_FIELD = {
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  options: {
    maxLength: 100,
    source: 'name',
  },
};

const IMAGE_FIELD = {
  description: 'The Image of the Pizza',
  name: 'image',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
};

const NUMBER_FIELD = {
  description: 'The Price of the Pizza',
  name: 'price',
  title: 'Price',
  type: 'number',
  validation: (Rule) => Rule.min(1000),
const TOPPING_FIELD = {
  name: 'toppings',
  title: 'Toppings',
  type: 'array',
  of: [
    {
      type: 'reference',
      to: [{ type: 'topping' }],
    },
  ],
};

export default {
  icon: MdLocalPizza,
  name: 'pizza',
  title: 'Pizza',
  type: 'document',
  fields: [NAME_FIELD, SLUG_FIELD, IMAGE_FIELD, NUMBER_FIELD],
};
