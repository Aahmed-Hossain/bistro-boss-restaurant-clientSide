import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { axiosHook } from "../../../hooks/useAxios";
import { FaBook, FaDelicious, FaDollarSign, FaUser } from "react-icons/fa6";


const AdminHome = () => {
    const {user} = useAuth();
    const {data:stats} = useQuery({
        queryKey: ['stats'],
        queryFn: async()=> {
            const res = await axiosHook.get('/admin-stats')
            return res.data;
        }
    })
    return (
        <div>
            <div className="bg-red-300 h-[7rem] ">
            <h2 className="text-3xl text-center">Hi , Welcome</h2>
            <div className="text-center font-semibold ">
                    {
                        user?.displayName ? user?.displayName : 'Back'
                    }
            </div>
            </div>

            <div className=" flex justify-center my-4 ">
            <div className="stats shadow-xl border">
  
  <div className="stat">
    <div className="stat-figure text-secondary text-5xl"> < FaDollarSign></FaDollarSign>
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">${stats?.revenue}</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary text-5xl"><FaUser ></FaUser>
    </div>
    <div className="stat-title"> Users</div>
    <div className="stat-value">{stats?.users}</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary text-5xl"><FaBook></FaBook>
    </div>
    <div className="stat-title">Total Orders</div>
    <div className="stat-value">{stats?.totalItems}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary text-5xl"><FaDelicious></FaDelicious>
    </div>
    <div className="stat-title"> Total Orders</div>
    <div className="stat-value">{stats?.orders}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
            </div>

        </div>
    );
};

export default AdminHome;