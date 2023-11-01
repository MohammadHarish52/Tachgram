import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { userSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";

const Leftsidebar = () => {
  const { mutate: signOut, isSuccess } = userSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (isSuccess) {
      navigate(0);
    }
  }, [isSuccess]);
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/tachyonnn.svg"
            width={160}
            height={53}
            alt=""
          />
        </Link>
        <Link to={`/profile/${user.id}`} className="gap-3 flex items-center">
          <img
            src={user.imageUrl || "/assests/images/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className="body-bold">{user.name}</p>
            <p className="small-regular text-light-3">@{user.username}</p>
          </div>
        </Link>
        <ul className="flex flex-col gap-6"></ul>
      </div>
    </nav>
  );
};

export default Leftsidebar;
