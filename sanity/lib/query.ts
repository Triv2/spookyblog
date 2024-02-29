import { groq } from "next-sanity";
import { client } from "./client";



export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category" && order != 0 ]
    {title,image,order,description,subcategory[]->{title,description,image,article[]->{title,description,image,author}}}`
  );
}


export async function getCategoriesHeader() {
  return client.fetch(
    groq`*[_type == "category" && order == 0 ]{title,image,description}`
  );
}



export async function getHeader(pageTitle:string) {
  return client.fetch(
    groq`*[_type == "category" && title == pageTitle ]{title,image,description,subcategory[]->{title,description,image,article[]->{title,description,image,author}}}`
  );
}


