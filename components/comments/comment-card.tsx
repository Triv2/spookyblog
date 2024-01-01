import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Article, Comment, Profile } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CommentCardProps {
  comment:Comment;
}

const CommentCard = ({
  comment,
}:CommentCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle >{comment.profileId}</CardTitle>
        <CardDescription className="text-sm md:text-xl">
          {new Date(comment.createdAt).toUTCString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {comment.content}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link className="text-red-600 flex items-center justify-center gap-1 hover:underline" href="/">
          Reply <ArrowRight className="h-4 w-4"/>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default CommentCard;
