"use client"
import Image from "next/image"
import Card from "@/components/Card"
export default function Home() {
  return (
    <div>
      <div className='flex h-[calc(100vh-88px)]  justify-center md:justify-around items-center md:ml-[30px] '>
        <div>
          <Card
            title='Need Help With School?'
            content="We've got your back. With our huge team of expert tutors and recent students were sure you will have the right person for you budget."
            size='lg'
            button
            buttonText='Find a Tutor'
            variant='primary'
            onClick={() => console.log("clicked")}
          />
        </div>
        <Image
          src='/Teach.png'
          alt='Teach'
          width={950}
          height={60}
          className='rounded-lg shadow-md'
        />
      </div>
    </div>
  )
}
