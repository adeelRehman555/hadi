import { redirect } from 'next/navigation'

export default function Index() {
  // default to login
  redirect('/login')
}
