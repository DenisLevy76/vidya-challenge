import { ComponentProps } from 'react'

export interface TextareaProps extends ComponentProps<'textarea'> {
  helperText?: string
  label?: string
}
