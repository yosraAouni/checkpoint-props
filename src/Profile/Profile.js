import React from 'react'
import {Card, Button} from 'react-bootstrap'

function Profile(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                {props.children}
                <Card.Body>
                    <Card.Title>{props.fullName}</Card.Title>
                    <Card.Text>
                    {props.profession}
                    </Card.Text>
                    <Button onClick={()=>{alert(`username:${props.fullName}`)}} variant="primary">{props.bio}</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Profile

Profile.defaultProps={
    fullName:'user name',
    bio:'address',
    profession:'your profession'
}