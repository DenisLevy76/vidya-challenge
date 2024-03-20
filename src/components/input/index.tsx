import { InputLabel, InputWrapper } from './styles'
import { InputProps } from './types'

export const Input: React.FC<InputProps> = ({
  suffix,
  helperText,
  label,
  ...otherProps
}) => {
  return (
    <InputLabel>
      <p className='label'>{label}</p>
      <InputWrapper>
        <input
          type='text'
          {...otherProps}
        />
        {suffix}
      </InputWrapper>
      {helperText && <p className='helper-text'>{helperText}</p>}
    </InputLabel>
  )
}
