import { ComponentProps } from 'react'

export interface ImageInputProps extends ComponentProps<'input'> {
  onFileChange?: (url: string) => void
}
