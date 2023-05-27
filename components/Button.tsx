"use client"
import { useState } from "react"

interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
  variant?: "nav" | "default" | "error" | "success" | "primary" | "secondary"
  wScreen?: boolean
  className?: string
  sm?: boolean
  lg?: boolean
  selected?: boolean
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  variant = "default",
  wScreen,
  className,
  sm,
  lg,
  selected,
}) => {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    if (!disabled) {
      onClick()
      setClick(true)
      setTimeout(() => {
        setClick(false)
      }, 100)
    }
  }
  return (
    <button
      onClick={() => handleClick()}
      className={`${className}  rounded-lg m-[5px]  transition 
      ${variant === "nav" && " hover:bg-neutral-200"}
      ${
        variant === "default" &&
        " bg-neutral-100 hover:bg-neutral-200 shadow-md"
      }
      ${
        variant === "error" &&
        " bg-red-500 hover:bg-red-600 shadow-md text-white"
      }
      ${
        variant === "success" &&
        " bg-green-500 hover:bg-green-600 shadow-md text-gray-100"
      }
      ${
        variant === "primary" &&
        " bg-blue-500 hover:bg-blue-600 shadow-md text-white"
      }
      ${
        variant === "secondary" &&
        " bg-neutral-500/80  hover:bg-neutral-600/80 shadow-md text-white"
      }
      ${lg && "px-[60px] "}
      ${disabled && "opacity-50 cursor-not-allowed"}
       ${click && "transform scale-95 "} 
       ${wScreen && "w-full "}
       ${sm ? "px-[10px] py-[5px]" : " px-[40px] py-[10px]"}
       ${selected && "font-bold"}
       `}
    >
      {label}
    </button>
  )
}

export default Button
