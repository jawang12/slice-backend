import { MdLocalPizza } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

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
      // Overrides built in component from sanity with your own
      inputComponent: PriceInput,
      description: 'Price of the pie',
      validation: (rule) => rule.min(1000)
    },
    {
      title: 'Toppings',
      name: 'toppings',
      type: 'array',
      // type: toppings comes from name prop (line 5 of toppings.js)
      // type of array of references to toppings
      of: [{ type: 'reference', to: [{ type: 'topping'}]}] // one to many relationship
    }
  ],
  preview: {
    select: {
      name: 'name',
      image: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings2.name',
      topping3: 'toppings3.name',
    },
    prepare: ({ name, image, ...toppings }) => {
      return {
        title: name,
        media: image,
        subtitle: Object.values(toppings).filter(Boolean).join(', ')
      }
    }
  }
};
