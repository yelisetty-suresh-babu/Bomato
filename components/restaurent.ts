export default {
  name: 'restaurent',
  title:"Restaurent",
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurent Name',
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
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
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter the rating of the restaurent ',
    },
    {
      name: 'type',
      title: 'Category',
      type:'reference',
      to:[{type:"Category"}]
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes ',
      of:[{type:"reference",to:[{type:'dish'}]}]
    },

  ],
}
