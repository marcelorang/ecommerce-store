import { forwardRef } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps 
     extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef <HTMLButtonElement,ButtonProps>(({
    className,
    children,
    disabled,
    type ="button",
    ...props
    
}, ref) => {
    return (
        <button
        className={cn(
            `
             w-auto
             rounded-full
             bg-black
             border-transparent
             px-5
             py-3
             disabled:cursor-not-allowed
             disbled:opacity-50
             text-white
             font-semibold
             hover:opacity-75 
             transition           
            `,
            className
        )}

        ref={ref}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button";

export default Button;