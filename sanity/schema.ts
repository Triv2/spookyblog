import { type SchemaTypeDefinition } from 'sanity'
import article from './schemas/articles/article'
import content from './schemas/articles/content'
import category from './schemas/categories/category'
import subcategory from './schemas/categories/subcategory'
import author from './schemas/users/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article,content,category,subcategory, author],
}
