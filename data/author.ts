import { db } from "@/lib/db";

export const getAuthorByUserId = async (userId: string) => {
  try {
    const author = await db.author.findFirst({
      where: { userId }
    });

    return author;
  } catch {
    return null;
  }
};