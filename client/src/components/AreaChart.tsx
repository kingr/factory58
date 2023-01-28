import { AreaChart, Area, XAxis, YAxis, Tooltip} from 'recharts';
import {AreaChartInputProps} from "../../types";

const AreaChartComp = ({data, title} : AreaChartInputProps) => {
  return (
    <>
      <p className='title'>{title}</p>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      </>
  );
}

export default AreaChartComp