import { Button, ButtonProps, HTMLChakraProps } from '@chakra-ui/react'

interface AtomButtonProps extends HTMLChakraProps<'button'>, ButtonProps
{
  label: string
  variant?: ButtonProps['variant']
}

export default function AtomButton({ label, ...rest}: AtomButtonProps) {
  return <Button {...rest}>{label}</Button>
}