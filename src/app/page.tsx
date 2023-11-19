import Login from '@/app/login/login'
import TemplateRoot from './template/root'
import { Box } from '@chakra-ui/react'
import { Flex, Text, Divider } from '@chakra-ui/react'
import AtomImagem from '@/components/Atoms/Imagem'


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

export function ImageContainer({ children }: { children: React.ReactNode }) {
  return (
    <Flex w="full" h="100%" align={'center'} justifyContent={'center'}>
      {children}
    </Flex>
  )
}

export default function Home() {
  return (
    <main>
      <TemplateRoot>
        <Box order={{base: 2, md: 1}} w={{base: '100%', md: "50%"}}>
          <ImageContainer>
            <AtomImagem 
              src={'/img/unsuccessful-state-feedback.png'}
              alt={'unsuccessful feedback'}
              />        
          </ImageContainer>
        </Box>

        <Box order={{base: 1, md: 2}} w={{base: '100%', md: "50%"}}>
          <Login />
        </Box>
        
        <Footer>
          <Text variant={'sm'} p={4}>
            © 2023 GrowthX. All Rights Reserved. <br />
            Designed, Built & Maintained by Sid*
          </Text>
        </Footer>
      </TemplateRoot>
    </main>
  )
}
