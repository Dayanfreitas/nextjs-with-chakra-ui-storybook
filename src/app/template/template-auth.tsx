import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}

export default function TemplateAuth(props: MainProps) {
  return (<Box pl={3} pr={3}>{ props.children }</Box>)
}
