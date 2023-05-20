import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import swal from 'sweetalert';

export default function ElectricityConnectionForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [nic, setNIC] = useState('');
  const [loadRequirement, setLoadRequirement] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  const [validated, setValidated] = useState(false);

  // Insert data
  function sendData(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    const newRequest = {
      name,
      address,
      nic,
      loadRequirement,
      contactNumber,
      email,
    };
    axios
      .post('/elecrequest/add', newRequest)
      .then(() => {
        swal({
          title: 'Success!',
          text: 'Successfully added the room',
          icon: 'success',
          button: 'Ok',
        });
      })
      .catch((e) => {
        swal('Please fill the form correctly' + e);
      });
  }

  return (
    <div className="container">
      <div className='col-md-8 offset-md-2'>
        <h1 className='text-center text-white fw-bold'>Connection Apply Form</h1>
      <Form noValidate validated={validated} onSubmit={sendData}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label className='text-white fw-bold'>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            isInvalid={validated && !name}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label className='text-white fw-bold'>Address:</Form.Label>
          <Form.Control
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
           <Form.Control.Feedback type="invalid">
            Please enter your Adree.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="nic">
          <Form.Label className='text-white fw-bold'>NIC:</Form.Label>
          <Form.Control
            type="text"
            value={nic}
            onChange={(e) => setNIC(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="loadRequirement">
          <Form.Label className='text-white fw-bold'>Load Requirement:</Form.Label>
          <Form.Control
            type="text"
            value={loadRequirement}
            onChange={(e) => setLoadRequirement(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactNumber">
          <Form.Label className='text-white fw-bold'>Contact Number:</Form.Label>
          <Form.Control
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label className='text-white fw-bold'>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

      <div className='text-center'>
      <Button variant="success" type="submit">
          Submit
        </Button>
      </div>
       
      </Form>
      </div>
     
    </div>
  );
}
