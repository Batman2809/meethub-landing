import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MeetHub - Launching Soon',
  description: 'MeetHub is launching soon! Manage all your Events in one place.',
}

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center gap-4 ${poppins.className}`}>
      <div className="flex w-[216px] justify-center items-center">
        <span className="text-[#FF0080] text-[20px] font-normal leading-normal">
          meethub
        </span>
      </div>
      <div className="flex w-[216px] h-[50px] px-[25px] py-[10px] justify-center items-center bg-gray-100 rounded-md">
        <h1 className="text-[#FF0080] text-center font-normal text-[20px] leading-normal w-full">
          Launching Soon
        </h1>
      </div>
      <div className="self-stretch text-center mt-8">
        <h2 
          className="text-[64px] font-bold leading-normal bg-clip-text text-transparent"
          style={{
            backgroundImage: 'conic-gradient(from 90deg at 50% 50%, #9E0451 0deg, #9B034F 28.799999356269836deg, #9B034F 100.80000042915344deg, #91034A 118.80000472068787deg, #FD007F 192.60000944137573deg, #AB0257 261.00000858306885deg, #F10079 291.6000008583069deg, #FF0080 360deg)',
          }}
        >
          Manage all your Events in one place
        </h2>
      </div>
    </main>
  )
}

