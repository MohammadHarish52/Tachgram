import { formatTimeAgo } from "@/lib/utils";
import { Models } from "appwrite";
import { Link } from "react-router-dom";

type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creator.$id}`}>
            <img
              src={
                post?.creator?.imageUrl ||
                "/assets/icons/profile-placeholder.svg"
              }
              alt="profile"
              className="rounded-full w-12"
            />
          </Link>
          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.creator.name}
            </p>
          </div>
          <div className="">
            <p className="subtle-semibold lg:small-regular">
              {formatTimeAgo(post.$createdAt)}
            </p>
            -<p className="subtle-semibold lg:small-regular">{post.location}</p>
          </div>
        </div>
      </div>
      <Link to={`/update-post/${post.$id}`}>
        <img src={"/assets/icons/edit.svg"} alt="" width={20} height={20} />
      </Link>
    </div>
  );
};

export default PostCard;
