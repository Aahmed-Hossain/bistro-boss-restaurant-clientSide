import { useQuery } from "@tanstack/react-query";
import { axiosHook } from "./../../../hooks/useAxios";
import { FaTrash } from "react-icons/fa6";

const AllUser = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosHook.get("/users");
      return res.data;
    },
  });
  return (
    <div>
      <div className="flex items-center gap-12 p-4 bg-red-300 h-[4rem]">
        <h2 className="tex-2xl font-semibold">All User</h2>
        <h2 className="tex-2xl font-semibold">Total Users: {users.length} </h2>
      </div>
      <div>
      {users?.map((item, index) => (
  <div key={item.email} className="flex items-center justify-between gap-2 py-2 border border-slate-200 rounded-xl mb-4 p-4">
    {/* left div */}
    <div className="flex items-center gap-3">
      
      <span className=" text-xl font-semibold p-3">{index + 1}</span>
      <img
        className="w-[12rem] rounded-xl flex items-start"
        src={item.image}
        alt={item.name}
      />
      <div>
        <p className="text-[#A2A2A2">Price: {item.price}</p>
        <p className="text-[#A2A2A2">Email: {item.email}</p>
      </div>
    </div>
    {/* right div */}
    <div className="flex items-center gap-4 pr-2">
      <div>
      <button 
      className="btn-circle btn-md opacity-60 p-3  hover:opacity-70 bg-black"><FaTrash className="text-orange-700 font-bold text-xl"></FaTrash>
        
      </button>
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default AllUser;
