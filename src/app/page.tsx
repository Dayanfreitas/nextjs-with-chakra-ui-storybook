import Image from 'next/image'
import styles from './page.module.css'
import AtomButton from '@/components/Atoms/Button'

import { Login } from '@/app/login/login'

export default function Home() {
  return (
    <Login />
  )
}
