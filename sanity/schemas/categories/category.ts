import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'subcategory',
      title: 'Subcategories',
      type: 'array',
      // @ts-ignore
      of: [{type: 'reference', to: {type: 'subcategory'}}],
    }),
    defineField({
      name: 'article',
      title: 'Articles',
      type: 'array',
      // @ts-ignore
      of: [{type: 'reference', to: {type: 'article'}}],
    }),


    
  ],
})