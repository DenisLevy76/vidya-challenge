import { useEffect, useState } from 'react'
import { FileIcon } from '../icons/file-icon'
import { DropContainer, ImagePreview } from './styles'
import { ImageInputProps } from './types'
import Dropzone from 'react-dropzone'

export const ImageInput: React.FC<ImageInputProps> = ({ onFileChange }) => {
  const [file, setFile] = useState<File | null>(null)
  const [imgURL, setImgURL] = useState<string>('')

  const toBase64 = (file: File) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64 = reader.result as string
      const base64String = base64.replace('data:', '').replace(/^.+,/, '')

      setImgURL(`data:image/*;charset=utf-8;base64,${base64String}`)
    }

    reader.readAsDataURL(file)
  }

  useEffect(() => {
    file && toBase64(file)
  }, [file])

  useEffect(() => {
    onFileChange && onFileChange(imgURL)
  }, [imgURL, onFileChange])

  return (
    <Dropzone
      accept={{
        'image/png': ['.png'],
        'image/jpeg': ['.jpeg', '.jpg'],
      }}
      onDropAccepted={(files) => setFile(files[0])}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <section>
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            <p>
              <FileIcon /> Faça o upload da fotos
            </p>
            <span>JPG e PNG, somente</span>
          </DropContainer>
          {file && (
            <ImagePreview
              src={file ? imgURL : undefined}
              alt='Image Preview'
              className='image-preview'
            />
          )}
        </section>
      )}
    </Dropzone>
  )
}
