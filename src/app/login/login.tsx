import AtomButton from '@/components/Atoms/Button'
import TemplateAuth from '@/app/template/template-auth'
import { Flex, Text } from '@chakra-ui/react'

export function Footer({ children }: { children: React.ReactNode }) {
  return (
    <Flex position={'fixed'} bottom={2} justifyContent={'center'} w="full">
      {children}
    </Flex>
  )
}

export default function Login() {
  return (
    <main>      
      <TemplateAuth>

        {/* <AtomImagem src="/img/logo.png" />
        <h1>Welcome Back!</h1>
        <p>Login to your account</p>
        <OrganismoLoginForm onSubmit={() => {} }>
          <AtomInput label="Enter Your Email" name="email"/>
          <AtomPassword label="Enter Your Password" name="password"/>
          <label><AtomCheckbox /> Remember Me</label>
          <AtomLink label="Recover Password" href="#" />
          <AtomBotao label="Login" />
        </OrganismoLoginForm>
        */}

        {/* <AtomButton label='Login'/>         */}
        <Footer>
          <Text variant={'sm'} p={4}>
            © 2023 GrowthX. All Rights Reserved. <br />
            Designed, Built & Maintained by Sid*
          </Text>
        </Footer>
      </TemplateAuth>
    </main>
  )
}
