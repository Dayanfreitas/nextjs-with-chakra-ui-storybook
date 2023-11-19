import AtomButton from '@/components/Atoms/Button'
import AtomLink from '@/components/Atoms/Link'

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
      {/* <Divider mt={2} /> */}
      {children}
    </Flex>
  )
}

export default function Login() {
  return (
    <TemplateAuth>

      <Flex alignItems={'center'} direction={'column'} w='full' mt={10} gap={2}>
        <AtomImagem />
        <Heading as='h1'>Welcome Back!</Heading>
        <Text textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}>Login to your account</Text>
      </Flex>

      <Divider mt={2} />

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

          <Flex justifyContent={'space-between'}>
            <Checkbox defaultChecked>
              Remember Me
            </Checkbox>
           
            <AtomLink variant='unstyle' color="#413B89">
              Recover Password
            </AtomLink>
          </Flex>

          <Flex w="full" direction="column" mt={2} alignItems="center">
            <AtomButton 
              label='Login'
              variant="primary"
              w="full"
              h={4}
              p={4}
            />

            <Text mt={2}>
              Don’t have an account? <AtomLink variant="primary">Register Now!</AtomLink>
            </Text>
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
