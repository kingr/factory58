import { ComponentMeta, ComponentStory } from "@storybook/react";
import AgvTracker  from "../components/AgvTracker";

export default {
  title: "Dashboard/AgvTracker",
  component: AgvTracker
} as ComponentMeta<typeof AgvTracker>

const Template: ComponentStory<typeof AgvTracker> = (args) => <AgvTracker {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "World!"
}