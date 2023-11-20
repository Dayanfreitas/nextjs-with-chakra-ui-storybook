import { Image } from '@chakra-ui/react'
import { SystemProps } from '@chakra-ui/system'

type AtomImagem = {
  src: string
  alt: string
  width?: SystemProps['width']
  height?: SystemProps['height']
}

export default function AtomImagem({ src, alt}: AtomImagem) {
  
  return (
    <Image
      src={src}
      alt={alt}
    />
  )
}

export function AtomImagemWithSize({ src, alt, width, height}: AtomImagem) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}
