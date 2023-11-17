import { Button } from '@chakra-ui/react'

type AtomButtonProps = {
  label?: string
}

export default function AtomButton({ label = 'Button' }: AtomButtonProps) {
  return <Button colorScheme='brand'>{label}</Button>
}