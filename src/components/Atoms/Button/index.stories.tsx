import Button from './index'
import type { StoryObj } from '@storybook/react'

const defaultModule = {
  title: 'DesignSystem/Atom/Button',
  component: Button,
  argTypes: {},
}

export default defaultModule

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
  },
}
