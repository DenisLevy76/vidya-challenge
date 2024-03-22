export interface ViaCEPResponse {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

export type States = State[]

export interface State {
  id: number
  sigla: string
  nome: string
  regiao: Regiao
}

export interface Regiao {
  id: number
  sigla: string
  nome: string
}
