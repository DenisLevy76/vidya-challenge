import { ComponentProps, ReactNode, forwardRef } from 'react'
import { SelectWrapper } from './styles'

export interface SelectProps extends ComponentProps<'select'> {
  label?: string
  placeholder?: string
  children?: ReactNode
  helperText?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, placeholder, children, helperText, ...otherProps }, ref) => {
    return (
      <SelectWrapper>
        <label>
          <span data-testid='select-label'>{label}</span>
          <select
            {...otherProps}
            ref={ref}
          >
            {placeholder && <option value=''>{placeholder}</option>}
            {children}
          </select>
        </label>
        <span data-testid='select-helper-text'>{helperText}</span>
      </SelectWrapper>
    )
  }
)
