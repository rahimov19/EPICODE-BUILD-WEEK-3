import React from 'react'
import { Card } from 'react-bootstrap'
import { BsThreeDots } from "react-icons/bs";


const MessageMiddle = ({_id, image, name, surname, title}) => {
  return (
<Card className='d-flex align-items-cente RemoveBorder '>
 <div className='d-flex alig-items-center'>
 <Card.Img
          src={image}
          className="sidebar-Home3-images ml-2 d-flex "
        />
   <Card.Body className='p-2 card-profile-title test3 p-0'>
     <p className='mb-1 text-dark'>
        {name} {surname} 
              
     
     </p>
     <small className='text-muted'>{title}</small>
   </Card.Body>
 </div>
</Card>
    )
}

export default MessageMiddle