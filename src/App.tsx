import React from 'react'
import './App.css'
import { Container } from 'reactstrap'
import FriendAccounts from './containers/FriendAccounts'

function App() {
  return (
    <main>
      <Container className="pt-5">
        <FriendAccounts />
      </Container>
    </main>
  )
}

export default App
