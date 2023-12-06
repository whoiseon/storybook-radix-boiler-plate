import DialogButton from "./DialogButton";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: 'components|Button',
  component: DialogButton,
  tags: ['autodocs'],
  argTypes: {
    buttonText: { control: 'text', description: '버튼 텍스트', defaultValue: '버튼' },
    onClick: { action: 'onClick' },
  }
} satisfies Meta<typeof DialogButton>

type Story = StoryObj<typeof meta>

export const dialogButton = {
  args: {
    buttonText: '버튼',
  },
} satisfies Story

export default meta;