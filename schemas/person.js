import { MdPerson } from 'react-icons/md';

export default {
  title: 'Slicemasters',
  name: 'person',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      }
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Info about this person'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }
  ]
}