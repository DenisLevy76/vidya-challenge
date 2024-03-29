import { forwardRef } from 'react'
import { TextareaProps } from './types'
import { TextareaLabel, TextareaWrapper } from './styles'

export const Textarea: React.FC<TextareaProps> = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ helperText, label, ...otherProps }, ref) => (
  <TextareaLabel>
    <p
      className='label'
      data-testid='textarea-label'
    >
      {label}
    </p>
    <TextareaWrapper>
      <textarea
        ref={ref}
        {...otherProps}
      />
    </TextareaWrapper>
    {helperText && (
      <p
        className='helper-text'
        data-testid='textarea-helper-text'
      >
        {helperText}
      </p>
    )}
  </TextareaLabel>
))

Textarea.displayName = 'Textarea'
