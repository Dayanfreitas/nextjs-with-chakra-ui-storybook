import { Link } from '@chakra-ui/react'

export default function AtomLink({variant, color, children}: { variant: 'primary' | 'unstyle', color?: string, children: React.ReactNode }) {
  return (
    <Link variant={variant} color={color} href='#'>
      {children}
    </Link>
  )
}