import { db } from "@/lib/db";

export const getCategoryByCategoryId = async (id: string) => {
  try {
    const profile = await db.category.findFirst({
      where: { id }
    });

    return profile;
  } catch {
    return null;
  }
};