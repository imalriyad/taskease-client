import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaTasks } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { MdMenuOpen } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen,setMenu] = useState(false)
  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("🎊Successfully Logout!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`${error.message.slice(17).replace(")", "")}`);
      });
  };
  return (
    <div className="flex justify-between">
      <aside className={`list-none p-10 min-w-[250px]  text-base-100 bg-neutral min-h-screen ${isOpen?'block ':'hidden'} md:block`}>
        <li className="text-3xl mb-10 border">TaskEase</li>

        <div className=" flex flex-col gap-4">
          <NavLink to={"/"} className="flex text-lg gap-3 items-center">
            <FaHome className="text-xl" /> Home
          </NavLink>
          <NavLink onClick={()=>setMenu(false)}
            to={"/dashboard/task"}
            className="flex text-lg gap-3 items-center"
          >
            <FaTasks className="text-xl" /> Task
          </NavLink>
          <div className="dropdown cursor-pointer dropdown-end">
            <div tabIndex={0} className="m-1 flex items-center gap-2">
              <img
                src={user?.photoURL}
                className="w-[30px] h-[30px]  object-cover rounded-full"
                alt=""
              />{" "}
              <span className="flex-col flex">
                <h1 className="text-sm">{user?.displayName}</h1>
                <h1 className="text-xs">{user?.email}</h1>
              </span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to={"/dashboard"} className="btn btn-sm btn-neutral">
                Dashboard
              </Link>
              <li
                onClick={handleLogout}
                className="btn mt-2 btn-sm btn-neutral"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div className={`text-neutral px-4 w-full bg-[#F2F2F2] `}>
        <div className="md:hidden block pt-4 ">
        <div className="flex w-full justify-between">
          <div>
          <li className={`text-3xl ${isOpen?'hidden':'block'} list-none mb-10`}>TaskEase</li>
          </div>
          <div onClick={()=>setMenu(!isOpen)}>
          {!isOpen?<MdMenuOpen className="text-4xl cursor-pointer"></MdMenuOpen> : <IoCloseSharp className="text-4xl btn btn-neutral btn-sm btn-circle cursor-pointer"></IoCloseSharp>}
          </div>
        </div>
        </div>
      <span className={`${isOpen?'hidden':'block'}`}> <Outlet></Outlet></span>
      </div>
    </div>
  );
};

export default Dashboard;
