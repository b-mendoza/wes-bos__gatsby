import { GiFullPizza } from '@react-icons/all-files/gi/GiFullPizza';
import type { PreviewValue, Rule } from '@sanity/types';

import PriceInput from '../../components/PriceInput';

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
  description: 'Image of the Pizza',
  name: 'image',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
};

const NUMBER_FIELD = {
  description: 'Price of the Pizza',
  initialValue: 1000,
  inputComponent: PriceInput,
  name: 'price',
  title: 'Price',
  type: 'number',
  validation: (Rule: Rule): Rule => Rule.min(1000),
};

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

interface SelectedFields {
  media: string;
  title: string;
  [toppingName: string]: string | undefined;
}

export default {
  icon: GiFullPizza,
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  fields: [NAME_FIELD, SLUG_FIELD, IMAGE_FIELD, NUMBER_FIELD, TOPPING_FIELD],
  preview: {
    select: {
      media: 'image',
      title: 'name',
      toppingName0: 'toppings.0.name',
      toppingName1: 'toppings.1.name',
      toppingName2: 'toppings.2.name',
      toppingName3: 'toppings.3.name',
    },
    prepare(fields: SelectedFields): PreviewValue {
      const { media, title, ...toppingList } = fields;

      const filteredUndefinedValues = Object.values(toppingList).filter(
        (value): value is string => Boolean(value),
      );

      const joinedToppingList = filteredUndefinedValues.join(', ');

      return {
        media,
        subtitle: joinedToppingList,
        title: fields.title,
      };
    },
  },
};
