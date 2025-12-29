import React from 'react'
interface ComProps extends React.HTMLAttributes<HTMLDivElement>{
    children:React.ReactNode;
    as?: React.ElementType;
    fluid?:boolean;
    className?: string
}
export default function Component({children, className="", fluid = false, as: Component = "div", ...props}: ComProps) {
  return (
    <Component className={`px-4 mx-auto ${className} ${fluid ? "w-full": "max-w-4xl"}`} {...props}>
        {children}
    </Component>
  )
}
