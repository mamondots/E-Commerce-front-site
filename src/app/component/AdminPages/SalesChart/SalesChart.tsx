import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const SalesChart = () => {
  return (
    <div className="bg-[#FFFFFF] border border-[#262626]/20 py-8 px-4 rounded">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Sales Chart</h2>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="w-[12px] h-[12px] bg-[#FFAE1A] rounded-full"></div>
            <div className="text-[#262626]/60">Revenue</div>
          </div>
          <select className="border border-[#262626]/20 text-sm py-2 px-4 outline-none rounded text-[#262626]/60">
            <option value="">Last Year</option>
            <option value="">Last Month</option>
            <option value="">Last Week</option>
            <option value="">Today</option>
          </select>
        </div>
      </div>

      {/* <div className="mt-4" style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
};

export default SalesChart;
