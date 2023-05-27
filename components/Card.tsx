"use client"
import Button from "./Button"
type CardProps =
  | {
      title: string
      content: string
      button: true
      onClick: () => void
      buttonText: string
      size?: "sm" | "md" | "lg" | "screen"
      variant?: "default" | "success" | "error" | "primary"
      className?: string
    }
  | {
      title: string
      content: string | React.ReactNode
      button: false
      onClick?: () => void
      buttonText?: string
      size?: "sm" | "md" | "lg" | "screen"
      variant?: "default" | "success" | "error" | "primary"
      className?: string
    }
const Card = ({
  title,
  content,
  button,
  onClick,
  buttonText,
  size = "md",
  variant = "default",
  className,
}: CardProps) => {
  return (
    <div
      className={`
      ${className}

      hover:bg-neutral-200/10
      transition
  bg-white
    shadow-md
    rounded-lg
    ${size === "sm" && "w-[300px] h-[300px]"}
    ${size === "md" && "w-[400px] h-[400px]"}
    ${size === "lg" && "w-[500px] h-[500px]"}
    p-4
    flex
    flex-col
    md:m-[10px]

  `}
    >
      <h1
        className={`text-2xl font-bold text-center m-[20px] ${
          variant === "primary" && "text-[#4f46e5]"
        } 
        ${variant === "error" && "text-red-500"}
        ${variant === "success" && "text-green-600"}
         `}
      >
        {title}
      </h1>
      <div className='flex flex-col justify-between items-center h-full pb-[10px]'>
        <div className='text-lg text-center w-full px-[20px]'>{content}</div>
        {button && (
          <Button
            label={buttonText}
            onClick={() => onClick()}
            variant={variant}
            wScreen
            className='py-[12px] min-w-full sm:w-auto'
          />
        )}
      </div>
    </div>
  )
}

export default Card
