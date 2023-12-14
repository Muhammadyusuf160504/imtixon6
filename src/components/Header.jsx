import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import useLogout from "../hooks/useLogout";
function Header() {
  const { user } = useGlobalContext();
  const { logout, error } = useLogout();
  return (
    <div
      className="flex justify-between w-full max-w-6xl
    items-center pt-4 pb-4 pr-5 pl-5 mr-auto ml-auto"
    >
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="m-1 bg-inherit">
          <h2 className="font-mono font-semibold text-3xl">My Kitchen</h2>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
      <nav className="flex items-center justify-center gap-4">
        <h2 className="font-mono font-normal text-xl text-neutral-500">
          Welkome: {user.displayName}
        </h2>
        <button
          onClick={logout}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        >
          LOGOUT
        </button>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          <Link to="createnewrecipe">CREATE</Link>
        </button>
      </nav>
    </div>
  );
}

export default Header;
