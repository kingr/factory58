import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table from "../components/Table";

export default {
  title: "Dashboard/Table",
  component: Table
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    {name: "Kurt", details: "Hello, my name is Kurt!"},
    {name: "Marco", details: "Hello, my name is Marco!"},
    {name: "Smittie", details: "Hello, my name is Smittie!"},
  ]
}