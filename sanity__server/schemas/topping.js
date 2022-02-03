import { FaPepperHot } from '@react-icons/all-files/fa/FaPepperHot';

const NAME_FIELD = {
  description: 'Name of the Topping',
  name: 'name',
  title: 'Name',
  type: 'string',
};

const VEGETERIAN_FIELD = {
  description: 'Is a Vegeterian Topping?',
  name: 'isVegeterian',
  title: 'Is Vegeterian',
  type: 'boolean',
  options: {
    layout: 'checkbox',
  },
};

export default {
  icon: FaPepperHot,
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  fields: [NAME_FIELD, VEGETERIAN_FIELD],
  preview: {
    select: {
      title: 'name',
      isVegeterian: 'isVegeterian',
    },
    prepare(fields) {
      const { title, isVegeterian } = fields;

      return {
        title,
        subtitle: isVegeterian ? 'Vegeterian' : null,
      };
    },
  },
};
