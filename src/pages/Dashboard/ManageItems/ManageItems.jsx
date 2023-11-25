import { FaReddit, FaTrash } from "react-icons/fa6";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { axiosHook } from "../../../hooks/useAxios";
import { NavLink } from "react-router-dom";

const ManageItems = () => {
  const [menu,, refetch] = useMenu();
  const handleDeleteMenu = (item) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
            const res = await axiosHook.delete(`menu/${item}`)
          if(res.data.deletedCount>0){
            refetch()
            Swal.fire({
                title: "Deleted!",
                text: `${menu.name} has been deleted.`,
                icon: "success"
              });
          }
        }
      });
  };
  return (
    <div>
      <SectionTitle
        title={"Hurry Up"}
        heading={"Manage ALL items"}
      ></SectionTitle>
      <div>
        {menu.map((item, index) => (
          <div
            key={item._id}
            className="flex items-center justify-between gap-2 py-2 border border-slate-200 rounded-xl mb-4 p-4"
          >
            {/* left div */}
            <div className="flex items-center gap-3">
              <span className=" text-xl font-semibold p-3">{index + 1}</span>
              <img
                className="w-[12rem] rounded-xl flex items-start"
                src={item.image}
                alt={""}
              />
              <div>
                <p className="text-[#A2A2A2">Email: {item.name}</p>
                <p className="text-[#A2A2A2">Price: {item.price}</p>
              </div>
            </div>
            {/* right div */}
            <div className="flex items-center gap-8 pr-2">
              <NavLink
              to={`/dashboard/updateItems/${item._id}`}
              
                className="btn btn-md bg-orange-400 "
              >
                <FaReddit className="font-bold text-xl text-white"></FaReddit>
              </NavLink>
              <div>
                <button
                  onClick={() => handleDeleteMenu(item._id)}
                  className="btn-circle btn-md opacity-60 p-3  hover:opacity-70 bg-black"
                >
                  <FaTrash className="text-orange-700 font-bold text-xl"></FaTrash>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
