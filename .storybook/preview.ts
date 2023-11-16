import type { Preview } from '@storybook/react'
import theme from '../src/config/theme'
const preview: Preview = {
  parameters: {
    chakra: {
      theme,
    },
    nextjs: {
      appDirectory: true,
      router: {
        basePath: '/',
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
