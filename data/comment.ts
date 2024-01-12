import { db } from "@/lib/db";

export const getCommentByCommentId = async (id: string) => {
  try {
    const comment = await db.comment.findFirst({
      where: { id }
    });

    return comment;
  } catch {
    return null;
  }
};

export const getCommentByUserId = async (userId: string) => {
  try {
    const comment = await db.comment.findFirst({
      where: { userId }
    });

    return comment;
  } catch {
    return null;
  }
};

export const getAllCommentsByUserId = async (userId: string) => {
  try {
    const comment = await db.comment.findMany({
      where: { userId }
    });

    return comment;
  } catch {
    return null;
  }
};

export const getAllCommentsByArticleId = async (articleId: string) => {
  try {
    const comment = await db.comment.findMany({
      where: { articleId }
    });

    return comment;
  } catch {
    return null;
  }
};