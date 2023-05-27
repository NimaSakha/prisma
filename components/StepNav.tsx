"use client"
import { useState } from "react"
import Button from "./Button"
import { useRouter } from "next/navigation"
type StepNavProps = {
  steps: string[]
  objects: React.ReactNode[]
}
const StepNav = ({ steps, objects }: StepNavProps) => {
  const router = useRouter()

  const [selected, setSelected] = useState(0)
  const handleAddStep = () => {
    setSelected((old) => old + 1)
  }
  const handleRemoveStep = () => {
    setSelected((old) => old - 1)
  }
  const handleLeave = () => {
    router.push("/")
  }
  return (
    <div>
      <div className='hidden sm:inline overflow-y-hidden'>
        <div className='  border-t-[1.8px] border-neutral-300 relative  top-[18.35px] mt-[10px] mx-[10px]' />
        <div className='flex justify-around relative z-10'>
          {steps.map((step, i) => (
            <div
              className={`flex items-center bg-white px-[10px] gap-[8px] text-gray-600 `}
              key={i}
            >
              <p
                className={`py-[5px] px-[13.4px] rounded-full bg-neutral-200 ${
                  step[selected] === step[i]
                    ? "bg-indigo-500 text-white"
                    : "bg-neutral-200"
                }`}
              >
                {i + 1}
              </p>
              <p className={`${step[selected] === step[i] && "font-bold"}`}>
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center h-[calc(100vh-44px)]'>
        {objects[selected]}
        <div className='absolute bottom-[50px] w-screen flex justify-between px-[10vw]'>
          {selected === 0 ? (
            <Button
              onClick={() => handleLeave()}
              label='Leave'
              variant='secondary'
              lg
            />
          ) : (
            <Button
              onClick={() => handleRemoveStep()}
              label='Back'
              variant='secondary'
              lg
            />
          )}

          <Button
            onClick={() => handleAddStep()}
            label='Next'
            variant='primary'
            lg
          />
        </div>
      </div>
    </div>
  )
}

export default StepNav
