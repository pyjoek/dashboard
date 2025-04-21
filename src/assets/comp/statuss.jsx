import React, { useEffect, useState } from "react";

function Statts() {
  const [cpu, setCpu] = useState(null);
  const [memory, setMemory] = useState({});
  const [disk, setDisk] = useState({});

  useEffect(() => {
    const fetchCpu = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/cpu");
        const data = await res.json();
        setCpu(data.cpu_load);
      } catch (err) {
        console.error("Failed to fetch CPU data:", err);
      }
    };

    const fetchMemory = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/memory");
        const data = await res.json();
        setMemory(data);
      } catch (err) {
        console.error("Failed to fetch memory data:", err);
      }
    };

    const fetchDisk = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/disk");
        const data = await res.json();
        setDisk(data);
      } catch (err) {
        console.error("Failed to fetch disk data:", err);
      }
    };

    const fetchAll = () => {
      fetchCpu();
      fetchMemory();
      fetchDisk();
    };

    fetchAll();
    const interval = setInterval(fetchAll, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Status Bars */}
      <div className="grid grid-cols-3 gap-4 p-4 text-center">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="font-semibold text-lg">CPU</h3>
          <p className="text-2xl">{cpu ?? "..."}%</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold text-lg">RAM</h3>
          <p className="text-2xl">
            {memory.memory_used ?? "..."} / {memory.memory_total ?? "..."} MB
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="font-semibold text-lg">Disk</h3>
          <p className="text-2xl">
            {disk.disk_used ?? "..."} / {disk.disk_total ?? "..."} MB
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statts;
