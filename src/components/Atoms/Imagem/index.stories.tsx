import AtomImagem from './index'
import type { StoryObj } from '@storybook/react'

const defaultModule = {
  title: 'DesignSystem/Atom/Image',
  component: AtomImagem,
  argTypes: {},
}

export default defaultModule

type Story = StoryObj<typeof AtomImagem>

export const Primary: Story = {
  args: {
    src: '/img/Logo.png',
    alt: 'Logo do site',
  },
}
