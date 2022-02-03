import { MdPerson } from '@react-icons/all-files/md/MdPerson';

const NAME_FIELD = {
  description: 'Name of the Slicemaster',
  name: 'name',
  title: 'Name',
  type: 'string',
};

const DESCRIPTION_FIELD = {
  description: 'Tell us more about this Slicemaster',
  name: 'description',
  title: 'Description',
  type: 'string',
};

const SLUG_FIELD = {
  name: 'slug',
  title: 'Slug',
  type: 'slug',
  options: {
    source: 'name',
    maxLength: 100,
  },
};

const IMAGE_FIELD = {
  description: 'Image of the Slicemaster',
  name: 'image',
  title: 'Image',
  type: 'image',
  option: {
    hotspot: true,
  },
};

export default {
  icon: MdPerson,
  name: 'slicemaster',
  title: 'Slicemasters',
  type: 'document',
  fields: [NAME_FIELD, DESCRIPTION_FIELD, SLUG_FIELD, IMAGE_FIELD],
};
