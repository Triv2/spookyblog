import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import CommentCard from "./comment-card";
import localFont from "next/font/local";
import { MessagesSquare } from "lucide-react";

interface CommentsProps {}
const titleFont = localFont({
  src: "../../public/fonts/cevicheOne.woff2",
});

const Comments = () => {
  return (
<div className="flex items-center flex-wrap w-full justify-center  gap-2 py-1 md:p-2">
  <div className=" flex justify-between items-center w-full">
  <p
            className={cn(
              "font-bold tracking-wider text-3xl text-emerald-400",
              titleFont.className
            )}
          >
            Comments (10)
          </p>
<Button className="flex items-center justify-center gap-1 hover:scale-105  bg-gradient-to-br z-10 from-purple-600/40 to-emerald-900/60 " variant="green" >
           <MessagesSquare className="h-5 w-5"/>Comment
          </Button>
          </div>
<CommentCard/>
<CommentCard/>
<CommentCard/>
<CommentCard/>
<CommentCard/>
<CommentCard/>
<CommentCard/>
<CommentCard/>
<CommentCard/>
<CommentCard/>
<CommentCard/>
<CommentCard/>
</div>
  );
}
export default Comments;