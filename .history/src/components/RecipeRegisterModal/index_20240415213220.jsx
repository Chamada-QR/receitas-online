import React from 'react'
import { Container } from './styles'
import { DefaultModal } from '../DefaultModal'
import { InputForm } from '../InputForm'
import { TextAreaForm } from '../TextAreaForm'

export function RecipeRegisterModal({buttonText}) {
  return <DefaultModal buttonText={buttonText}> 
    <form>
      <InputForm name="recipeName" displayName="Receita Nome"/>
      <TextAreaForm name="desc" displayName="Desc"/>
      <TextAreaForm name="howto" displayName="Modo de preparo"/>
    </form>
  </DefaultModal>
}