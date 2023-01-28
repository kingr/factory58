import { ComponentMeta, ComponentStory } from "@storybook/react";
import AreaChart from "../components/AreaChart";

export default {
  title: "Dashboard/AreaChart",
  component: AreaChart
} as ComponentMeta<typeof AreaChart>

const Template: ComponentStory<typeof AreaChart> = (args) => <AreaChart {...args} />;

export const Default = Template.bind({});

Default.args = {
  data:  [
    {
      name: 'Page A',
      value: 4000,
    },
    {
      name: 'Page B',
      value: 3000,
    },
    {
      name: 'Page C',
      value: 2000,
    },
    {
      name: 'Page D',
      value: 2780,
    },
    {
      name: 'Page E',
      value: 1890,
    },
    {
      name: 'Page F',
      value: 2390,
    },
    {
      name: 'Page G',
      value: 3490,
    },
  ]
}