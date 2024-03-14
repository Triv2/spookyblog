import { groq } from "next-sanity";
import { client } from "./client";

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category" && order != 0 ]
    {
      _id,
      title,
      image,
      order,
      description,
      subcategory[]->{
        title,
        description, 
        image, 
        article[]->{
          title,
          description,
          image,
          author
        }
      }
    }`
  );
}

export async function getCategoriesHeader() {
  return client.fetch(
    groq`*[_type == "category" && order == 0 ]
    {
      title,
      image,
      description
      }`
  );
}
export async function getNewsCategory() {
  return client.fetch(
    groq`*[_type == "category" && order == 1 ]
    {
      title,
      image,
      description,
      subcategory[]->{
        title,
        description,
        image,
        article[]->{
          title,
          description,
          image,
          author,
          fullContent
          }
        }
      }`
  );
}

export async function getCategory(name: string) {
  return client.fetch(
    groq`*[_type == "category" && title == "${name}" ]
    {
      title,
      image,
      description,
      subcategory[]->{
        title,
        description,
        image,
        article[]->{
          title,
          description,
          image,
          author,
          fullContent
          }
        }
    }`
  );
}

export async function getArticlesBySubcategory(name: string) {
  return client.fetch(
    groq`*[_type == "subcategory" && title == "${name}" ]
    {
      article[]->{
        title,
        description,
        image,
        author,
        fullContent
        }
    }`
  );
}

export async function getArticles() {
  return client.fetch(
    groq`*[_type == "article" ]
    {
      title,
      description,
      image,
      author,
      fullContent
    }`
  );
}

export async function getArticleByName(name: string) {
  return client.fetch(
    groq`*[_type == "article" && title == "${name}" ]
    {
      title,
      description,
      image,
      author,
      fullContent
    }`
  );
}
