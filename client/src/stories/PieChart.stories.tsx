import { ComponentMeta, ComponentStory } from "@storybook/react";
import PieChart from "../components/PieChart";

export default {
  title: "Dashboard/PieChart",
  component: PieChart
} as ComponentMeta<typeof PieChart>

const Template: ComponentStory<typeof PieChart> = (args) => <PieChart {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
  ]
}