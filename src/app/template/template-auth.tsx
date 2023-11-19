import { Flex } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}

export default function TemplateAuth(props: MainProps) {
  return (
    <Flex
      pl={{ base: 3, md: '185px'}}
      pr={{ base: 3, md: '185px'}}
      pt={{base: 0, md: '121px' }}
      direction={'column'}>
        { props.children }
    </Flex>
  )
}
