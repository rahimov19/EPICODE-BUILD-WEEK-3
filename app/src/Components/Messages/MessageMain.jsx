import React, { useState } from 'react'
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import MessageMiddle from './MessageMiddle';

const MessageMain = () => {
    const [profiles, setProfiles] = useState([]);
    
 const fetchingData = async () => {
    try{
        let res = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
            headers:{
     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk5Y2E2ODU0ZjRhYTAwMTUxOTMwNDkiLCJpYXQiOjE2NzEwMjMyMTAsImV4cCI6MTY3MjIzMjgxMH0.TvcKiRlun_P91HvsbIwk2v8lbbJccsc5aHIF9Hyx9IQ`
            }
        }
        );
        if(res.ok) {
            let data = await res.json()
            setProfiles(data)
            console.log(data);
        } else {
            console.log("smth went wrong fetchig data");
        }
    } catch(err) {
        console.log("Error server");
    }
 }
 useEffect(() => {
    fetchingData()
 })

  return (
 <div className='profile-sub-section mt-0 container message-list'>
    <Row className='pt-3 pb-0'>
    <Col xs="8">
        <p className='pl-3'>Messaging</p>
    </Col>
    <Col className='xs=4' className="d-flex align-items-center cardWidth">
    <i class="bi bi-three-dots"></i>
          <i class="bi bi-pencil-square"></i>
    </Col>
    </Row>
    <Row>
        <Col>
        <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
    </span>
    <input type="text" class="form-control" placeholder="Search"/>
  
  </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
          <input
            className="w-25"
            type="search"
            placeholder="Search Nessage here"
            className="w-100"
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
</svg> */}
        </Col>
      </Row>
      <Row className="p-3 mt-0 rowMessage">
        {profiles &&
          profiles.slice(0, 10).map(({ _id, image, name, surname, title }) => (
            <Col xs="12 Usersleft" key={_id}>
              <MessageMiddle
                _id={_id}
                image={image}
                name={name}
                surname={surname}
                title={title}
              /> 
              <p className="hour">4h</p>
            </Col>
          ))}
      </Row>
 </div>
    )
}


export default MessageMain