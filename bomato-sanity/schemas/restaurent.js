export default {
  name: 'restaurent',
  title: 'Restaurent',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurent Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'Image',
      type: 'image',
      title: 'Image of the Restaurent ',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'latitude of the Restaurent ',
    },
    {
      name: 'Long',
      type: 'number',
      title: 'longitude of the Restaurent',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address of the Restaurent ',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter the rating of the restaurent ',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('please enter value between 1 and 5'),
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes ',
      of: [{type: 'reference', to: [{type: 'dish'}]}],

    },
  ],
}
