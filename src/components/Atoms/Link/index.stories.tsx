import AtomLink from './index'
import type { StoryObj } from '@storybook/react'

const defaultModule = {
  title: 'DesignSystem/Atom/Link',
  component: AtomLink,
  argTypes: {},
}

export default defaultModule

type Story = StoryObj<typeof AtomLink>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Olá link',
  },
}

export const CustomColor: Story = {
  args: {
    variant: 'primary',
    color: '#413B89',
    children: 'Olá link !',
  },
}