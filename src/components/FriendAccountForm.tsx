import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'
import { FriendAccount } from './FriendAccountCard'

export type FormType = Omit<FriendAccount, 'id'>

interface FriendAccountFormProps {
  formData: FormType | null
  isEditing?: boolean
  onSubmit?: Function
}
function FriendAccountForm({ formData, isEditing, onSubmit }: FriendAccountFormProps) {
  const { control, handleSubmit, reset, setValue } = useForm<FormType>({
    defaultValues: formData ?? { name: '', walletAddress: '', email: '' },
  })

  useEffect(() => {
    if (formData) {
      setValue('name', formData.name, { shouldValidate: true, shouldTouch: true, shouldDirty: true })
      setValue('walletAddress', formData.walletAddress, { shouldValidate: true, shouldTouch: true, shouldDirty: true })
      setValue('email', formData.email, { shouldValidate: true, shouldTouch: true, shouldDirty: true })
    }
  }, [formData])

  const submitForm = (data: FormType) => {
    onSubmit?.(data)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState: { error, isTouched, invalid } }) => (
          <FormGroup floating>
            <Input
              {...field}
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              valid={isTouched && !invalid}
              invalid={invalid}
            />
            <Label for="name">Name</Label>
            <FormFeedback>{error?.message}</FormFeedback>
          </FormGroup>
        )}
        rules={{
          required: 'Name is required',
        }}
      />
      <Controller
        name="walletAddress"
        control={control}
        render={({ field, fieldState: { error, invalid, isTouched } }) => (
          <FormGroup floating>
            <Input
              {...field}
              id="walletAddress"
              name="walletAddress"
              placeholder="Wallet Address"
              type="text"
              valid={isTouched && !invalid}
              invalid={invalid}
            />
            <Label for="walletAddress">Wallet Address</Label>
            <FormFeedback>{error?.message}</FormFeedback>
          </FormGroup>
        )}
        rules={{
          required: 'Wallet is required',
          pattern: {
            value: /^0x[a-fA-F0-9]{40}$/,
            message: 'Please use a valid Ethereum wallet address',
          },
        }}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState: { error, isTouched, invalid } }) => (
          <FormGroup floating>
            <Input
              {...field}
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              valid={isTouched && !invalid}
              invalid={invalid}
            />
            <Label for="email">Email</Label>
            <FormFeedback>{error?.message}</FormFeedback>
          </FormGroup>
        )}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: 'Please use a valid email address',
          },
        }}
      />
      <Button color="success" type="submit">
        {isEditing ? 'Save' : 'Add'} Account
      </Button>
    </Form>
  )
}

export default FriendAccountForm
