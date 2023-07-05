import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation:(rule)=>rule.required()
    }),
    defineField({
      name: 'image',
      title: 'image of category ',
      type: 'image',
    }),
  ],
})
