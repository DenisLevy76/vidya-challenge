import { InputWrapper } from './styles'
import { InputProps } from './types'

export const Input: React.FC<InputProps> = ({
  suffix,
  helperText,
  ...otherProps
}) => {
  return (
    <InputWrapper>
      <input
        type='text'
        {...otherProps}
      />
      {helperText && <p className='helper-text'>{helperText}</p>}
      {suffix}
    </InputWrapper>
  )
}
