import AtomButton from '@/components/Atoms/Button'
import AtomLink from '@/components/Atoms/Link'

import TemplateAuth from '@/app/template/template-auth'

import { Flex, Text, Heading, Divider, Input, Spacer } from '@chakra-ui/react'
import { FormControl, FormLabel, Checkbox, Box } from '@chakra-ui/react'

import AtomImagem from '@/components/Atoms/Imagem'
import OrganismsLoginForm from '@/components/Organisms/Login'


export function Header({ children }: { children: React.ReactNode }) {
  return (
    <Flex alignItems={'center'} direction={'column'} w='full' mt={10} gap={2}>
      {children}
    </Flex>
  )
}



export function Slot({ children }: { children: React.ReactNode }) {
  return (
    <Flex justifyContent={'center'}>
      {children}
    </Flex>
  )
}

export default function Login() {
  return (
    <TemplateAuth>
      <Header>
        <AtomImagem src={'/img/Logo.png'} alt='logo do site' />
        <Heading as='h1'>Welcome Back!</Heading>
        <Text textShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'}>Login to your account</Text>
      </Header>

      <Divider mt={2} />

      <Flex w='full' pl={10} pr={10}>
        <OrganismsLoginForm>
          <FormControl variant={'custom'}>
            <FormLabel>Enter Your Email</FormLabel>
            <Input type='email' />
          </FormControl>

          <FormControl>
            <FormLabel>Enter Your Password</FormLabel>
            <Input type='email' />
          </FormControl>

          <Flex justifyContent={'space-between'} mt={2}>
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
    </TemplateAuth>    
  )
}
