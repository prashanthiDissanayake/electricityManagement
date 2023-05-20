import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";
import swal from "sweetalert";
import { useParams } from "react-router-dom";

export default function EditElectricityType() {
  const [validated, setValidated] = useState(false);
  const [electricityNumber, setElectricityNumber] = useState('');
  const [electricityType, setElectricityType] = useState('');

  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();

  useEffect(() => {

    getElectric();
}, []);
const getElectric = async () => {
    const res = await axios
        .get("/electricityy/electricityy/" + id)
        .then((res) => {
            setElectricityNumber(res.data.electricityNumber)
            setElectricityType(res.data.electricityType)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(() => { 
            console.log("sadsadas;ldsad;alsd;l")
        });
};

  const handleSubmit = (event) => {
    setValidated(true);
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    const newElectricty = {
        "_id": id,
      electricityNumber,
      electricityType,
      price,
      description
    }
    axios.put('/electricityy/update/' + id, newElectricty)
      .then((res) => {
        swal({
            title: "Success!",
            text: "Successfully edited the electricty",
            icon: "success",
            button: "Ok",
          });

          setTimeout(() => {
            window.location.replace("../adminList") 
          }, 2000)
        console.log(res.data, "ererwerew222222==========================")
      }).catch(err => {
        console.log(err, "-----------------------------")
      })
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();

    //   const newElectricty = {
    //     electricityNumber,
    //     electricityType,
    //     price,
    //     description
    //   }
    //   axios.post('/electricityy/add', newElectricty)
    //     .then((res) => {
    //       // swal({
    //       //     title: "Success!",
    //       //     text: "Successfully added the electricty",
    //       //     icon: "success",
    //       //     button: "Ok",
    //       //   });
    //       console.log(res.data, "ererwerew222222==========================")
    //     }).catch(err => {
    //       console.log(err, "-----------------------------")
    //     })

    // }

  };

  return (
    <div className="container">
      <div className="text-center fs-4 fw-bold text-white">
        Update Electricity Type
      </div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="add-form p-5 text-center"
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label className="text-dark fw-bold">
              Electricity Number
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={electricityNumber}
              placeholder="Electricity Number"
              onChange={(e) => setElectricityNumber(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label className="text-dark fw-bold">
              Electricity Type
            </Form.Label>
            <Form.Control
              required
              type="text"
              value={electricityType}
              placeholder="Electricity Type"
              onChange={(e) => setElectricityType(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label className="text-dark fw-bold">Cost</Form.Label>
            <Form.Control type="text"
              placeholder="Cost"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label className="text-dark fw-bold">Description</Form.Label>
            <Form.Control
              type="text"
              row="10"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit" className="mt-5">
          Update form
        </Button>
      </Form>
    </div>
  );
}
