import PostForm from "@/components/forms/PostForm";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/add-post.svg"
            alt="add"
            width={36}
            height={36}
          />
          <h2 className="h3-bold md:h2-full text-left w-full">Edit Post</h2>
        </div>
        <PostForm />
      </div>
    </div>
  );
};

export default EditPost;
