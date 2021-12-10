import React, { useMemo, useState } from 'react'
import { nanoid } from 'nanoid'
import { Col, Row } from 'reactstrap'
import FriendAccountCard, { FriendAccount } from '../components/FriendAccountCard'
import FriendAccountForm, { FormType } from '../components/FriendAccountForm'

function FriendAccounts() {
  const [friendAccounts, setFriendAccounts] = useState<FriendAccount[]>([])
  const [selectedAccount, setSelectedAccount] = useState<FriendAccount | null>(null)

  const onFormSubmit = (data: FormType) => {
    if (!selectedAccount || !selectedAccount.id) {
      // Create
      const newFriend: FriendAccount = {
        id: nanoid(),
        ...data,
      }
      setFriendAccounts((val) => [newFriend, ...val])
    } else {
      // Modify
      const index = friendAccounts.findIndex((account) => account.id === selectedAccount.id)
      if (index !== -1) {
        setFriendAccounts((val) => {
          const mutate = [...val]
          mutate.splice(index, 1, { id: selectedAccount.id, ...data })

          return mutate
        })
      }
    }

    setSelectedAccount(null)
  }

  const onCardEdit = (data: FriendAccount) => {
    setSelectedAccount(data)
  }

  const onCardDelete = (data: FriendAccount) => {
    const index = friendAccounts.findIndex((account) => account.id === data.id)
    if (index !== -1) {
      setFriendAccounts((val) => {
        const mutate = [...val]
        mutate.splice(index, 1)

        return mutate
      })
    }
  }

  const friendForm = useMemo(
    () => <FriendAccountForm formData={selectedAccount} isEditing={!!selectedAccount?.id} onSubmit={onFormSubmit} />,
    [selectedAccount]
  )

  const friendList = useMemo(
    () =>
      friendAccounts.length === 0 ? (
        'You have no friends :('
      ) : (
        <Row sm="1" md="2">
          {friendAccounts?.length > 0
            ? friendAccounts.map((friend, index) => (
                <Col className="mb-4" key={`${friend.id}_${index}`}>
                  <FriendAccountCard data={friend} onEdit={onCardEdit} onDelete={onCardDelete} />
                </Col>
              ))
            : 'No friends found!'}
        </Row>
      ),
    [friendAccounts]
  )

  return (
    <section>
      <h2 className="text-center">Friends</h2>
      <section>
        <h4>Form</h4>
        {friendForm}
      </section>
      <section className="my-4">
        <h4>Friends</h4>
        {friendList}
      </section>
    </section>
  )
}

export default FriendAccounts
