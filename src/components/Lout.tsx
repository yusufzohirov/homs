
import { Button } from "./ui/button";
import { Link, Outlet } from "react-router";

function Lout() {
  return (
    <div>
      <div>
        <Link to="/">
          <Button>RhfPage</Button>
        </Link>

        <Link to="/Page2">
          <Button>Page2</Button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Lout;
