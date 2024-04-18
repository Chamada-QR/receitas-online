import React from 'react'
import { Container, TitleWrapper, CardWrapper } from './styles'
import { Navbar } from '../../components/Navbar'
import { RecipeCard } from '../../components/RecipeCard'

export function Home() {
  return <Container>
    <Navbar />
    <main>
      <TitleWrapper>
        <h2>Receitas</h2>
        <button>Cadastrar - Receita</button>
        <RecipeRegisterModal></RecipeRegisterModal>
      </TitleWrapper>

      <CardWrapper>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </CardWrapper>
    </main>

    <footer></footer>
  </Container>
}