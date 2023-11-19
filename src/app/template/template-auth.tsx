import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}

export default function TemplateAuth(props: MainProps) {
  return (
    <Flex 
      pl={3}
      pr={3}
      height={'100vh'}
      direction={'column'}>
        { props.children }
    </Flex>
  )
}
