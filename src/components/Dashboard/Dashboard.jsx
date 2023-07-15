import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const marksArray = [
    { id: 1, name: "John", physics: 85, chemistry: 90, math: 78 },
    { id: 2, name: "Jane", physics: 70, chemistry: 80, math: 92 },
    { id: 3, name: "Bob", physics: 90, chemistry: 75, math: 85 },
    { id: 4, name: "Alice", physics: 78, chemistry: 85, math: 90 },
    { id: 5, name: "Mike", physics: 87, chemistry: 85, math: 92 },
    { id: 6, name: "Sara", physics: 75, chemistry: 80, math: 70 },
    { id: 7, name: "David", physics: 92, chemistry: 88, math: 80 },
    { id: 8, name: "Emily", physics: 80, chemistry: 76, math: 75 },
    { id: 9, name: "Tom", physics: 90, chemistry: 92, math: 88 },
    { id: 10, name: "Olivia", physics: 75, chemistry: 80, math: 70 },
    { id: 11, name: "Alex", physics: 85, chemistry: 90, math: 78 },
    { id: 12, name: "Ava", physics: 70, chemistry: 80, math: 92 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={marksArray}>
        <Line dataKey={"physics"}></Line>
        <Line stroke="#8884d8" dataKey={"math"}></Line>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Dashboard;
