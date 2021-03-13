import { MdLocalPizza } from 'react-icons/md';

export default {
  // This is the display name for the type
  title: 'Pizzas',
  // The identifier for this document type used in the api's
  name: 'pizza',
  type: 'document',
  icon: MdLocalPizza,
  // Now we proceed to list the fields of our document
  fields: [
    {
      // The display name for this field
      title: 'Pizza Name',
      // The identifier for this field used in the api's
      name: 'name',
      type: 'string',
      description: 'What do you call this pie?',
    },
    {
      // The display name for this field
      title: 'Slug',
      // The identifier for this field used in the api's
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      // The display name for this field
      title: 'Image',
      // The identifier for this field used in the api's
      name: 'image',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      // The display name for this field
      title: 'Price',
      // The identifier for this field used in the api's
      name: 'price',
      type: 'number',
      description: 'Price of the pie',
      validation: (rule) => rule.min(10)
    },
  ],
};
