

import category from "./sanity/schemas/categories/category";
import subcategory from "./sanity/schemas/categories/subcategory";
import article from "./sanity/schemas/articles/article";
import { PortableTextBlock } from "sanity";


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

export type HeaderType = {
  _id: string;
  title: string;
  order: number;
  description: string;
  image: {
    alt: string;
    image: string;
  };
  
};

export type ArticleType = {
  _id: string;
  title: string;
  description: string;
  image: {
    alt: string;
    image: string;
  };
  author: string;
  fullContent:PortableTextBlock[];
}

export enum CategoryTypeKeys { 
  UL= "Urban Legends",
  CM= "Cosmic Mythology",
  GH= "Ghost Hunting",
  SR= "Spirit Rumors",
  PS= "Paranormal Science",
  CC= "Cryptid Corner",
}