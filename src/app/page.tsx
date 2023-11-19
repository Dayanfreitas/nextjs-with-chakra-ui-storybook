import Login from '@/app/login/login'
import TemplateRoot from './template/root'

export default function Home() {
  return (
    <main>
      <TemplateRoot>
        <Login />
      </TemplateRoot>
    </main>
  )
}
