import React from 'react'

import { Flex, Text, Divider } from '@chakra-ui/react'

type RootTemplateProsps = {
  children: React.ReactNode
}

export function Footer({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      w="full"
      left={0}
      bottom={2}
      direction={'column'} 
      position={'fixed'}
      alignItems={'center'}>
      <Divider mt={2} />
        {children}
    </Flex>    
  )
}

export default function TemplateRoot({ children }: RootTemplateProsps) {
  return (
    <Flex direction={{base: 'column', md: 'row'}} height={'100vh'}>
      { children }
    </Flex>
  )
}
