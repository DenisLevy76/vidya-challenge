import { forwardRef } from 'react'
import { InputLabel, InputWrapper } from './styles'
import { InputProps } from './types'

export const Input: React.FC<InputProps> = forwardRef<
  HTMLInputElement,
  InputProps
>(({ suffix, helperText, label, ...otherProps }, ref) => (
  <InputLabel>
    <p className='label'>{label}</p>
    <InputWrapper>
      <input
        type='text'
        ref={ref}
        {...otherProps}
      />
      {suffix}
    </InputWrapper>
    <p className='helper-text'>{helperText}</p>
  </InputLabel>
))

Input.displayName = 'Input'
