import { Image } from '@chakra-ui/react'

type AtomImagem = {
  src: string
  alt: string
}

export default function AtomImagem({ src, alt }: {src: string, alt: string}) {
  return (
    <Image
      src={src}
      alt={alt}
    />
  )
}