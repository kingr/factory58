import {useEffect, useState} from 'react';
import AreaChart from "../components/AreaChart";
import Table from "../components/Table";
import PieChart from "../components/PieChart";
import io from "socket.io-client";
const socket = io("http://localhost:3001");

const PieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 }
];

const Index = () => {

  const [cpuData, setCpuData] = useState<any>([])
  const [modeData, setModelData] = useState<any>([])

  useEffect(() => {
    socket.on("cpu", (data) => {
      console.log(data);
      setCpuData((current:any) => [...current, data]);
    })
  }, []);
  useEffect(() => {
    socket.on("models", (data) => {
      console.log(data);
      setModelData((current:any) => [...current, data]);
    })
  }, []);

  return (
    <div className="dashboard-wrapper">
      <AreaChart data={cpuData} title="CPU Usage %" />
      <Table data={modeData} />
      <PieChart data={PieChartData} />
    </div>
  )
}

export default Index;