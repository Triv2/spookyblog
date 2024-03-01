

import category from "./sanity/schemas/categories/category";
import subcategory from "./sanity/schemas/categories/subcategory";
import article from "./sanity/schemas/articles/article";


export type CategoryType = {
  _id: string;
  title: string;
  order: number;
  description: string;
  subcategory: typeof subcategory[];
  image: {
    alt: string;
    image: string;
  };
  
};


export type SubcategoryType = {
  _id: string;
  title: string;
  category: typeof category;
  article: typeof article[];
  description: string;
  image: {
    alt: string;
    image: string;
  };
}


