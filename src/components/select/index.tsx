import { ComponentProps, ReactNode, forwardRef } from 'react'
import { SelectWrapper } from './styles'

export interface SelectProps extends ComponentProps<'select'> {
  label?: string
  placeholder?: string
  children?: ReactNode
  helperText?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    return (
      <SelectWrapper>
        <label>
          <span>{props.label}</span>
          <select
            {...props}
            ref={ref}
          >
            {props.placeholder && <option value=''>{props.placeholder}</option>}
            {props.children}
          </select>
        </label>
        <span>{props.helperText}</span>
      </SelectWrapper>
    )
  }
)
