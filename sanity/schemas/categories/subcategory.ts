import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subcategory',
  title: 'Subcategory',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      // @ts-ignore
      to: {type: 'category'},
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
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