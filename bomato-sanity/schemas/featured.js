import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured new category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'restaurents',
      title: 'Restaurents',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'restaurent'}]}],
    }),
  ],
})
