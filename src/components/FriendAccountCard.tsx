import React from 'react'
import { Button, Card, CardBody, CardFooter, CardSubtitle, CardText, CardTitle } from 'reactstrap'

function FriendAccountCard() {
  return (
    <div>
      <Card body color="secondary" outline>
        <CardBody>
          <CardTitle tag="h5">Name</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Email
          </CardSubtitle>
          <CardText>Wallet Address</CardText>
        </CardBody>
        <CardFooter className="d-flex align-items-center justify-content-end bg-transparent border-top-0">
          <Button color="warning" outline>
            Edit
          </Button>
          <Button className="ms-2" color="danger" outline>
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default FriendAccountCard
