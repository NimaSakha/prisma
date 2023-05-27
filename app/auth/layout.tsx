"use client"
import React from "react"
import "../globals.css"
import StepNav from "@/components/StepNav"
import Card from "@/components/Card"
import Button from "@/components/Button"
const layout = ({ children }: { children: React.ReactNode }) => {
  //! three functions that will be passed through to step nav as components
  const Object1 = () => {
    return (
      <div>
        <Card
          className='h-auto'
          variant='default'
          title='Select Account Type:'
          button={false}
          content={
            <div className='flex flex-col justify-center h-full'>
              <div className='flex flex-col gap-[20px] justify-center h-full'>
                <input
                  type='text'
                  placeholder='UserName'
                  className='w-full py-[10px] px-[8px] rounded-lg shadow-md placeholder:font-light placeholder:text-gray-400'
                />
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full py-[10px] px-[8px] rounded-lg shadow-md placeholder:font-light placeholder:text-gray-400'
                />
                <input
                  type='password'
                  placeholder='Password'
                  className='w-full py-[10px] px-[8px] rounded-lg shadow-md placeholder:font-light placeholder:text-gray-400'
                />
                <select
                  name='Account Type'
                  id='Accountselect'
                  className='w-full py-[10px] shadow-md rounded-lg px-[8px]'
                >
                  <option value='Student'>Student</option>
                  <option value='Tutor'>Tutor</option>
                </select>
              </div>
              <Button
                label='Submit'
                sm
                variant='primary'
                className='mt-[20px] '
                onClick={() => console.log("clicked")}
              />
            </div>
          }
        />
      </div>
    )
  }
  const Object2 = () => {
    return null
  }
  return (
    <html lang='en'>
      <body>
        <StepNav
          objects={[<Object1 key={1} />, <Object2 key={2} />]}
          steps={["step 1", "step 2", "step 3"]}
        />
        {children}
      </body>
    </html>
  )
}

export default layout
