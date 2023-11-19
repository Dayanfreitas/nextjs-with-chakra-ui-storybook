import AtomButton from '@/components/Atoms/Button'
import TemplateAuth from '@/app/template/template-auth'

import { Flex, Text, Heading, Divider, Input } from '@chakra-ui/react'
import { FormControl, FormLabel, Checkbox } from '@chakra-ui/react'

import AtomImagem from '@/components/Atoms/Imagem'
import OrganismsLoginForm from '@/components/Organisms/Login'



export function Header({ children }: { children: React.ReactNode }) {
  return (
    <Flex position={'fixed'} bottom={2} justifyContent={'center'} w="full">
      {children}
    </Flex>
  )
}


export function Footer({ children }: { children: React.ReactNode }) {
  return (
    <Flex position={'fixed'} bottom={2} justifyContent={'center'} w="full">
      {children}
    </Flex>
  )
}

export default function Login() {
  return (
    <TemplateAuth>
      <Flex alignItems={'center'} direction={'column'} w='full' mt={10}>
        <AtomImagem />
        <Heading as='h1'>Welcome Back!</Heading>
        <Text variant={'sm'}>Login to your account</Text>

        <Flex w={'90%'}>
          <Divider mt={2} />
        </Flex>
      </Flex>

      <Flex w='full' pl={10} pr={10} pt={4}>
        <OrganismsLoginForm>
          <FormControl variant={'custom'}>
            <FormLabel>Enter Your Email</FormLabel>
            <Input type='email' />
          </FormControl>

          <FormControl>
            <FormLabel>Enter Your Password</FormLabel>
            <Input type='email' />
          </FormControl>

          <Flex>
            <Checkbox defaultChecked>Checkbox</Checkbox>
            Remember Me

            Recover Password
          </Flex>

          <Flex w="full" mt={2}>
            <AtomButton height={'4rem'} label='Login' w="full" variant="primary" />
          </Flex>
        </OrganismsLoginForm>
      </Flex>

      <Footer>
        <Text variant={'sm'} p={4}>
          © 2023 GrowthX. All Rights Reserved. <br />
          Designed, Built & Maintained by Sid*
        </Text>
      </Footer>
    </TemplateAuth>
  )
}
