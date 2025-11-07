import clsx from "clsx"
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react"

type ButtonVariant = "primary" | "secondary" | "ghost"

type ButtonAsButton = {
  as?: "button"
} & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonAsAnchor = {
  as: "a"
  href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonProps = {
  variant?: ButtonVariant
  className?: string
} & PropsWithChildren & (ButtonAsButton | ButtonAsAnchor)

const baseStyle =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"

const variantMap: Record<ButtonVariant, string> = {
  primary:
    "bg-cyber text-midnight shadow-card shadow-cyber/30 hover:bg-cyber/90 focus-visible:outline-cyber",
  secondary:
    "border border-white/25 text-warm hover:border-cyber hover:text-cyber focus-visible:outline-cyber",
  ghost: "text-warm/70 hover:text-cyber focus-visible:outline-cyber",
}

export function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props
  const classes = clsx(baseStyle, variantMap[variant], className)

  if (props.as === "a") {
    const { as: _as, variant: _variant, className: _className, children: _children, ...anchorProps } = props
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const {
    as: _as,
    variant: _variant,
    className: _className,
    children: _children,
    type = "button",
    ...buttonProps
  } = props

  return (
    <button className={classes} type={type} {...buttonProps}>
      {children}
    </button>
  )
}
