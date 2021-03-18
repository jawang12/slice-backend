import { FaPepperHot } from 'react-icons/fa';

export default {
  title: 'Toppings',
  name: 'topping',
  type: 'document',
  icon: FaPepperHot,
  fields: [
    {
      title: 'Name of Topping',
      name: 'name',
      type: 'string',
      description: 'Name of topping'
    },
    {
      title: 'Vegetarian',
      name: 'vegetarian',
      type: 'boolean',
      options: {
        layout: 'checkbox'
      }
    }
  ], 
  preview: {
    select: {
      name: 'name',
      vegan: 'vegetarian' // selected value based off name prop in line 17
    },
    prepare: ({ name, vegan }) => ({
      title: vegan && name + ' (v)' || name
    })
  }
}