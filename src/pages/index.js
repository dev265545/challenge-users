import Image from 'next/image'
import { Inter } from 'next/font/google'
import CandidateLogin from '@/components/CandidateLogin'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div>
  
  <CandidateLogin />
</div>
  )
}
