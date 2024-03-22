import * as Dialog from '@radix-ui/react-dialog'
import { Button } from '../button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '../dialog'
import { IconButton } from '../icon-button'
import { XIcon } from '../icons/x-icon'
import { CreateClientDialogBody } from './styles'
import { Input } from '../input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IClient } from '../../@types/client'
import { useDispatch } from 'react-redux'
import { createClient } from '../../states/clientSlice'
import { useEffect, useState } from 'react'
import { api } from '../../libs/axios'
import { States, ViaCEPResponse } from './types'
import { Select } from '../select'

const schema = yup.object({
  name: yup.string().required('Este campo é obrigatório.'),
  CNPJ: yup.string().required('Este campo é obrigatório.'),
  phone: yup.string().required('Este campo é obrigatório.'),
  CEP: yup.string().required('Este campo é obrigatório.'),
  state: yup.string().required('Este campo é obrigatório.'),
  city: yup.string().required('Este campo é obrigatório.'),
  neighborhood: yup.string().required('Este campo é obrigatório.'),
  address: yup.string().required('Este campo é obrigatório.'),
  number: yup
    .number()
    .typeError('Digite um número válido.')
    .positive('Apenas números maiores que 0.')
    .required('Este campo é obrigatório.'),
})

export const CreateClientDialog: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<IClient>({
    resolver: yupResolver(schema),
  })

  const [states, setStates] = useState<States>([])

  const getAddress = async (CEP: string) => {
    const { data } = await api.get<ViaCEPResponse>(
      `https://viacep.com.br/ws/${CEP}/json/`
    )

    setValue('address', data.logradouro)
    setValue('city', data.localidade)
    setValue('neighborhood', data.bairro)
    setValue('state', data.uf)
  }

  const getStates = async () => {
    const { data } = await api.get<States>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados`
    )

    setStates(data)
  }

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const dispatch = useDispatch()

  const onSubmit = (data: IClient) => {
    dispatch(createClient(data))
    setIsOpen(false)
    reset()
  }

  useEffect(() => {
    getStates()
  }, [])

  return (
    <Dialog.Root
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <Dialog.Trigger asChild>
        <Button>+ Novo Cliente</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cadastrar Cliente</DialogTitle>
              <Dialog.Close asChild>
                <IconButton>
                  <XIcon />
                </IconButton>
              </Dialog.Close>
            </DialogHeader>
            <CreateClientDialogBody>
              <form
                id='create-client'
                onSubmit={handleSubmit(onSubmit)}
              >
                <Input
                  label='Nome'
                  {...register('name')}
                  helperText={errors.name?.message}
                />
                <Input
                  label='CNPJ'
                  {...register('CNPJ')}
                  helperText={errors.CNPJ?.message}
                />
                <Input
                  label='Telefone'
                  {...register('phone')}
                  helperText={errors.phone?.message}
                />
                <Input
                  label='CEP'
                  {...register('CEP')}
                  onBlur={(event) => getAddress(event.target.value)}
                  helperText={errors.CEP?.message}
                />
                <Select
                  {...register('state')}
                  label='Estado'
                  placeholder='Selecione o estado'
                >
                  {states.map((state) => (
                    <option
                      value={state.sigla}
                      key={state.sigla}
                    >
                      {state.nome}
                    </option>
                  ))}
                </Select>

                <Input
                  label='Cidade'
                  {...register('city')}
                  helperText={errors.city?.message}
                />
                <Input
                  label='Bairro'
                  {...register('neighborhood')}
                  helperText={errors.neighborhood?.message}
                />
                <Input
                  label='Endereço'
                  {...register('address')}
                  helperText={errors.address?.message}
                />
                <Input
                  label='Número'
                  {...register('number')}
                  type='number'
                  helperText={errors.number?.message}
                />
              </form>
            </CreateClientDialogBody>
            <DialogFooter>
              <Button
                size='small'
                type='submit'
                form='create-client'
                formNoValidate
                style={{ marginLeft: 'auto' }}
              >
                Salvar
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
