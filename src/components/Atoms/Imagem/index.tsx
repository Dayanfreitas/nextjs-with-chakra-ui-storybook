import { Button, Image } from '@chakra-ui/react'

type AtomImagem = {
}

export default function AtomImagem() {
  return <Image
    borderRadius='full'
    boxSize='150px'
    src='https://bit.ly/dan-abramov'
    alt='Dan Abramov'
  />
}