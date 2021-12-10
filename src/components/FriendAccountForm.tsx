import React, { FormEvent } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function FriendAccountForm() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup floating>
        <Input id="name" name="name" placeholder="Name" type="text" />
        <Label for="name">Name</Label>
      </FormGroup>
      <FormGroup floating>
        <Input id="walletAddress" name="walletAddress" placeholder="Wallet Address" type="text" />
        <Label for="walletAddress">Wallet Address</Label>
      </FormGroup>
      <FormGroup floating>
        <Input id="email" name="email" placeholder="Email" type="email" />
        <Label for="email">Email</Label>
      </FormGroup>
      <Button color="success" type="submit">
        Add Account
      </Button>
    </Form>
  )
}

export default FriendAccountForm
