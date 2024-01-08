import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Article, Comment, Profile } from "@prisma/client";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar } from "../ui/avatar";
import ProfileAvatar from "../profile/profile-avatar";
import ProfileAbout from "../profile/profile-about";

interface CommentCardProps {
  comment?:Comment;
}

const CommentCard = ({
  comment,
}:CommentCardProps) => {
  return (
    <Card className="bg-slate-900 w-full">
      <CardHeader>
       
        <CardTitle className="text-lg flex items-center " > 
        
        <ProfileAbout
          imageUrl="/avatars/avatarf2.png"
          name="Profile Name"
          avatarClassName="w-10 h-10 mr-2"
        />
        </CardTitle>
        <CardDescription className="text-sm text-purple-200/80">
          {new Date().toUTCString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-10 text-emerald-300/80">
        Comment Content will be here. Need to add a max character limit. No need for comments to be longer than 2 paragraphs.
        Comment Content will be here. Need to add a max character limit. No need for comments to be longer than 2 paragraphs.
        Comment Content will be here. Need to add a max character limit. No need for comments to be longer than 2 paragraphs.
      </CardContent>
      <CardFooter className="flex justify-between">
      <div className="flex">
          <div className="flex gap-1 text-muted-foreground items-center justify-center">
          <p>0</p>
          <ArrowUp className="h-4 w-4 text-emerald-600 "/>
          </div>
          <div className="flex gap-1 text-muted-foreground items-center justify-center">
          <ArrowDown className="h-4 w-4 text-purple-800"/>
          <p>0</p>
          </div>
        </div>
        <Button className="flex items-center justify-center gap-1 hover:scale-105 z-10 bg-gradient-to-br  from-purple-600/40 to-emerald-900/60" variant="green" asChild>
        <Link href="/">
          Reply <ArrowRight className="h-4 w-4"/>
        </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export default CommentCard;
