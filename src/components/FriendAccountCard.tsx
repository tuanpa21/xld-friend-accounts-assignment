import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardSubtitle, CardText, CardTitle } from 'reactstrap'

export interface FriendAccount {
  id: string
  name: string
  walletAddress: string
  email: string
}

interface FriendAccountCardProps {
  data: FriendAccount
  onEdit?: Function
  onDelete?: Function
}
function FriendAccountCard({ data, onEdit, onDelete }: FriendAccountCardProps) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false)

  return (
    <div>
      <Card body color="secondary" outline>
        <CardBody>
          <CardTitle tag="h5">{data.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {data.email}
          </CardSubtitle>
          <CardText>{data.walletAddress}</CardText>
        </CardBody>
        <CardFooter className="d-flex align-items-center justify-content-end bg-transparent border-top-0">
          <Button color="warning" outline onClick={() => onEdit?.(data)}>
            Edit
          </Button>
          <div className="ms-2">
            {showConfirmDelete ? (
              <div className="d-flex align-items-center">
                <p className="mb-0">Are you sure?</p>
                <Button className="mx-1" onClick={() => setShowConfirmDelete(false)}>
                  ⛌
                </Button>
                <Button color="danger" outline onClick={() => onDelete?.(data)}>
                  ✓
                </Button>
              </div>
            ) : (
              <Button color="danger" outline onClick={() => setShowConfirmDelete(true)}>
                Delete
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default FriendAccountCard
