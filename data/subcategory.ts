import { db } from "@/lib/db";

export const getSubcategoryBySubcategoryId = async (id: string) => {
  try {
    const profile = await db.subCategory.findFirst({
      where: { id }
    });

    return profile;
  } catch {
    return null;
  }
};