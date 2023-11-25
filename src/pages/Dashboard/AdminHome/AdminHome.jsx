import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { axiosHook } from "../../../hooks/useAxios";
import { FaBook, FaDelicious, FaDollarSign, FaUser } from "react-icons/fa6";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid,PieChart, Pie,ResponsiveContainer, Legend } from "recharts";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const AdminHome = () => {
  const { user } = useAuth();
  const { data: stats = {} } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      const res = await axiosHook.get("/admin-stats");
      return res.data;
    },
  });
  const { data: chartData = [] } = useQuery({
    queryKey: ["chatData"],
    queryFn: async () => {
      const res = await axiosHook.get("/order-stats");
      return res.data;
    },
  });
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
      y + height
    } ${x + width}, ${y + height}
        Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };


//   for pie chatrts


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const pieChartData = chartData?.map(data=> {
    return {name: data.category, value: data.revenue}
})

  return (
    <div>
      <div className="bg-red-300 h-[7rem] ">
        <h2 className="text-3xl text-center">Hi , Welcome</h2>
        <div className="text-center font-semibold ">
          {user?.displayName ? user?.displayName : "Back"}
        </div>
      </div>

      <div className=" flex justify-center my-4 ">
        <div className="stats shadow-xl border">
          <div className="stat">
            <div className="stat-figure text-secondary text-5xl">
              {" "}
              <FaDollarSign></FaDollarSign>
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">${stats?.revenue}</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-5xl">
              <FaUser></FaUser>
            </div>
            <div className="stat-title"> Users</div>
            <div className="stat-value">{stats?.users}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary text-5xl">
              <FaBook></FaBook>
            </div>
            <div className="stat-title">Total Orders</div>
            <div className="stat-value">{stats?.totalItems}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary text-5xl">
              <FaDelicious></FaDelicious>
            </div>
            <div className="stat-title"> Total Orders</div>
            <div className="stat-value">{stats?.orders}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* left bar charts */}
        <div className="w-1/2">
        <BarChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="category" />
      <YAxis />
      <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {chartData?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
        </div>


        {/* right bar charts */}
        <div className="w-1/2">
<ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
        <Legend></Legend>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
