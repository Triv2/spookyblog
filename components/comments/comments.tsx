import CommentCard from "./comment-card";

interface CommentsProps {}

const Comments = () => {
  return (
<div className="flex items-center flex-wrap w-full justify-center  gap-2 py-1 md:p-2">
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