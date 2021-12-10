import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import FriendAccountCard from '../components/FriendAccountCard'
import FriendAccountForm from '../components/FriendAccountForm'

function FriendAccounts() {
  const [friendAccounts] = useState<any[]>([{}, {}])

  return (
    <section>
      <h2 className="text-center">Friends</h2>
      <section>
        <h4>Form</h4>
        <FriendAccountForm />
      </section>
      <section className="my-4">
        <h4>Friends</h4>
        {friendAccounts.length === 0 ? (
          'You have no friends :('
        ) : (
          <Row sm="1" md="2">
            {friendAccounts?.length > 0
              ? friendAccounts.map((friend, index) => (
                  <Col className="mb-4" key={`${friend.id}_${index}`}>
                    <FriendAccountCard />
                  </Col>
                ))
              : 'No friends found!'}
          </Row>
        )}
      </section>
    </section>
  )
}

export default FriendAccounts
