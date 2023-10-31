import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/tachyonnn.svg"
            width={130}
            height={325}
            alt=""
          />
        </Link>

        <div className="flex gap-4">
          <Button>
            <img src="/assets/icons/logout.svg" alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
