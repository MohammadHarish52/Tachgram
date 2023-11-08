import { Models } from "appwrite";

type postStatsprops = {
  post: Models.Document;
  userId: string;
};

const PostStats = ({ post, userId }: postStatsprops) => {
  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img src="/assests/icons/liked.svglike" alt="" width={20} height={20} />
      </div>
    </div>
  );
};

export default PostStats;
