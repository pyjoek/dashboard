import "../css/body.css";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Body() {
  const [cpu, setCpu] = useState(null);
  const [cpuHistory, setCpuHistory] = useState([]);

  const fetchCPU = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/cpu");
      const data = await res.json();
      setCpu(data.cpu_load);

      setCpuHistory((prev) => {
        const updated = [
          ...prev,
          {
            time: new Date().toLocaleTimeString(),
            usage: data.cpu_load,
          },
        ];
        return updated.slice(-30); // Keep only last 30 entries
      });
    } catch (err) {
      console.error("Failed to fetch CPU data:", err);
    }
  };

  useEffect(() => {
    fetchCPU();
    const interval = setInterval(() => {
      fetchCPU();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="body">
      <div className="bg-white m-4 p-6 shadow rounded">
        <h2 className="text-lg font-bold mb-2">CPU Usage Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={cpuHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="usage"
              stroke="#ff7300"
              name="CPU Usage (%)"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Body;
