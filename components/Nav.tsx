"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Button from "./Button"

const Nav = () => {
  const router = useRouter()
  return (
    <nav className='flex items-center justify-between px-[30px] py-[20px]'>
      <Link href='/' className='text-3xl font-bold text-indigo-600'>
        Tutor Hero
      </Link>
      <div>
        <Button
          label='Home'
          onClick={() => router.push("/")}
          variant='nav'
          sm
          selected
        />
        <Button
          label='Tutors'
          onClick={() => router.push("/tutors")}
          variant='nav'
          sm
        />
        <Button
          label='Explore'
          onClick={() => router.push("/explore")}
          variant='nav'
          sm
        />
        <Button
          label='Sign In'
          onClick={() => router.push("/auth")}
          variant='nav'
          sm
        />
      </div>
    </nav>
  )
}

export default Nav
