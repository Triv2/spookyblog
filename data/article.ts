import { db } from "@/lib/db";

export const getArticleByArticleId = async (id: string) => {
  try {
    const profile = await db.article.findFirst({
      where: { id }
    });

    return profile;
  } catch {
    return null;
  }
};