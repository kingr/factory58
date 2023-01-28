import { PieChart, Pie, Tooltip } from "recharts";
import { PieChartInputProps } from "../../types";

const PieChartComp = ({data} : PieChartInputProps) => {
  return (
    <PieChart width={400} height={400}>
    <Pie
      dataKey="value"
      isAnimationActive={false}
      data={data}
      cx={200}
      cy={200}
      outerRadius={80}
      fill="tomato"
      label
    />
    <Tooltip />
  </PieChart>
  );
}

export default PieChartComp