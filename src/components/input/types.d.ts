import { ComponentProps, ReactNode } from 'react'

export interface InputProps extends ComponentProps<'input'> {
  suffix?: ReactNode
  helperText?: string
}
